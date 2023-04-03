import React, { useState } from "react"
import "./GenreTag.css"
import { useSearch } from "../Contexts/SearchContext.js"
function GenreTag({
	text,
	borderStyle,
	color,
	backgroundColor,
	fontSize,
	clickable,
}) {
	const { query, setQuery } = useSearch()
	const [toggled, setToggled] = useState(query.genreList[text])
	const toggleGenreFilter = () => {
		setToggled((old) => !old)
		setQuery((old) => ({
			...old,
			genreList: { ...old.genreList, [text]: !old.genreList[text] },
		}))
	}

	if (clickable) {
		return (
			<div
				className="genre-tag"
				style={{
					borderRadius: borderStyle === 1 ? "10px" : "50px",
					backgroundColor: toggled ? "white" : "transparent",
					color: toggled ? "black" : "white",
					fontSize: fontSize,
					cursor: "pointer",
					textAlign: "center",
				}}
				onClick={toggleGenreFilter}
			>
				{text}
			</div>
		)
	}

	return (
		<div
			className="genre-tag"
			style={{
				borderRadius: borderStyle === 1 ? "10px" : "50px",
				backgroundColor: backgroundColor ? backgroundColor : "transparent",
				fontSize: fontSize,
			}}
		>
			{text}
		</div>
	)
}

export default GenreTag
