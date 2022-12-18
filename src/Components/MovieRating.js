import React from "react"
import "./MovieRating.css"
function MovieRating({ rating }) {
	return <span className="movie-rating">{rating}</span>
}

export default MovieRating
