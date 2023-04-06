import React, { useEffect, useRef, useState } from "react"
import useDebounce from "./hooks/useDebounce"
import SearchResult from "./SearchResult"
import "./Search.css"
import useSearchMovies from "./hooks/useSearchMovies"

function Search() {
	const [search, setSearch] = useState("")
	const searchContainerRef = useRef()
	const debouncedSearch = useDebounce(search, 500)
	const { movieArray, isLoading } = useSearchMovies(debouncedSearch)
	const [isOpen, setIsOpen] = useState(false)

	function openSearch(e) {
		if (isOpen) return

		setIsOpen(true)
	}
	function onSearchClick(e) {
		setIsOpen(false)
		setSearch("")
	}
	// If user clicks outside of search results the prompt closes
	useEffect(() => {
		function checkClick(e) {
			if (
				searchContainerRef.current &&
				!searchContainerRef.current.contains(e.target)
			) {
				setIsOpen(false)
				setSearch("")
			}
		}

		window.addEventListener("click", checkClick)

		return () => {
			window.removeEventListener("click", checkClick)
		}
	}, [])

	return (
		<div className="search-container" ref={searchContainerRef}>
			<form action="">
				<input
					value={search}
					placeholder="Search"
					className={`movie-search ${isOpen ? "open" : ""}`}
					type="text"
					onChange={e => setSearch(e.target.value)}
					onClick={openSearch}
				/>
				{isOpen && search !== "" && (
					<div className="search-results">
						{movieArray[0] ? (
							<SearchResult movie={movieArray[0]} onClick={onSearchClick} />
						) : null}
						{movieArray[1] ? (
							<SearchResult movie={movieArray[1]} onClick={onSearchClick} />
						) : null}
						{movieArray[2] ? (
							<SearchResult movie={movieArray[2]} onClick={onSearchClick} />
						) : null}
						{movieArray.length === 0 && (
							<h1
								style={{
									color: "white",
									fontSize: "1rem",
									fontWeight: "500",
									margin: "auto",
								}}
							>
								Sorry, we can't find That.
							</h1>
						)}
					</div>
				)}
			</form>
		</div>
	)
}

export default Search
