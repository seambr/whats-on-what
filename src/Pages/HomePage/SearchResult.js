import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import PosterSkeleton from "../../Skeletons/PosterSkeleton"
import MoviePoster from "../../Components/MoviePoster"
import "./SearchResult.css"
function SearchResult({ movie }) {
	function truncateString(str, num) {
		if (str.length > num) {
			return str.slice(0, num) + "..."
		} else {
			return str
		}
	}

	return (
		<div className="result">
			<div className="result-poster">
				<img src={movie.posterLink} alt="" />
			</div>

			<div className="details">
				<p style={{lineHeight:1, marginBottom:"1em"}}>{movie.title}</p>
				<p style={{ color: "white", fontSize: "12px", lineHeight: "1" }}>
					{truncateString(movie.summary, 60)}
				</p>
				<p style={{ color: "violet" }}>
					{movie.availibility.map(e => e.toUpperCase() + "\n")}
				</p>
			</div>
		</div>
	)
}

export default SearchResult
