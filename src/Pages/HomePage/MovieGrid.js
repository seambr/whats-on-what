import React, { useCallback, useRef, useState } from "react"
import "./Grid.css"
import useMovieData from "./hooks/useMovieData"
import MoviePoster from "../../Components/MoviePoster"
import PosterSkeleton from "../../Skeletons/PosterSkeleton"

function Grid() {
	const [pageNumber, setPageNumber] = useState(1)
	const { movieArray, isLoading, hasMore } = useMovieData(
		pageNumber,
		setPageNumber
	)
	const observer = useRef()

	const lastElementRef = useCallback(
		node => {
			if (isLoading) return
			if (observer.current) observer.current.disconnect()

			observer.current = new IntersectionObserver(entries => {
				if (entries[0].isIntersecting && hasMore) {
					setPageNumber(old => old + 1)
				}
			})

			if (node) observer.current.observe(node)
		},
		[isLoading]
	)

	return (
		<div className="grid-container">
			<div className="movie-grid">
				{movieArray.map((movie, index) => {
					if (index === movieArray.length - 1) {
						return (
							<MoviePoster
								key={index}
								movie={movie}
								isLast={true}
								lastElementRef={lastElementRef}
							/>
						)
					}
					return <MoviePoster key={index} movie={movie} showAvailibility={1} />
				})}
				{isLoading && movieArray.length === 0 && <PosterSkeleton count={20} />}
				{isLoading && <div className="loader" />}
			</div>
		</div>
	)
}

export default Grid
