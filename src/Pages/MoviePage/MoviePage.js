import React from "react"
import { SkeletonTheme } from "react-loading-skeleton"
import { useLocation, useParams } from "react-router-dom"
import LargeButton from "../../Components/LargeButton"
import MoviePoster from "../../Components/MoviePoster"
import MovieRating from "../../Components/MovieRating"
import RatingStars from "../../Components/RatingStars"
import "./MoviePage.css"
const tagStyle = {
	color: "#fefbea",
	marginTop: 0,
	fontWeight: "normal",
	fontSize: "12px",
	paddingLeft: "2em",
}
const titleStyle = {
	color: "white",
	fontSize: "2em",
	marginBottom: 0,
	marginTop: 0,
}
const summaryStyle = {
	color: "white",
	marginTop: "1em",
	fontWeight: "normal",
	fontSize: "16px",
}
function MoviePage() {
	const params = useParams()
	const location = useLocation()
	const { movie } = location.state
	console.log(movie)
	return (
		<main className="movie-page">
			<section className="movie-info">
				<div className="darken" />
				<img
					id="movie-page-backdrop"
					src={movie.backdropLink}
					alt={`Movie backdrop for ${movie.title}`}
				/>
				<div className="movie-page-contents">
					<img
						id="movie-page-poster"
						src={movie.posterLink.replace("w220_and_h330_face", "original")}
						alt={`Movie poster for ${movie.title}`}
					/>
					<div className="movie-page-text">
						<div className="row-flex">
							<h1 style={titleStyle}>{movie.title}</h1>
							<MovieRating rating={movie.rating} />
						</div>
						<div className="row-flex">
							<span
								style={{ paddingLeft: "2em", color: "#aaa", fontSize: "0.8em" }}
							>
								{movie.runtime}
							</span>
							<RatingStars rating={movie.score} color="black" />
						</div>
						{movie.tagline !== "false" && (
							<h5 style={tagStyle}>"{movie.tagline}"</h5>
						)}
						<p style={summaryStyle}>{movie.summary}</p>
						<LargeButton />
					</div>
				</div>
			</section>
		</main>
	)
}

export default MoviePage
