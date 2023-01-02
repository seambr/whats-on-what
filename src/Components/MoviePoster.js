import React from "react"
import "./MoviePoster.css"
import { Link } from "react-router-dom"

import WatchListButton from "./WatchListButton"
import ServiceAvailibilityLogos from "./ServiceAvailibilityLogos"
function MoviePoster({ movie, isLast, lastElementRef, showAvailibility }) {
	return (
		<div className="poster-container">
			<WatchListButton movie={movie} />

			<Link to={`/movie/${movie._id}`} state={{ movie: movie }}>
				{isLast ? (
					<div className="movie-card-container" ref={lastElementRef}>
						<div className="icon">
							<ServiceAvailibilityLogos availibility={movie.availibility} />
						</div>
						<img
							className="poster"
							src={movie.posterLink}
							alt={movie.title}
							draggable={false}
						/>
					</div>
				) : (
					<div className="movie-card-container">
						{showAvailibility && (
							<div className="icon">
								<ServiceAvailibilityLogos availibility={movie.availibility} />
							</div>
						)}
						<img
							className="poster"
							src={movie.posterLink}
							alt={movie.title}
							draggable={false}
						/>
					</div>
				)}
			</Link>
		</div>
	)
}

export default MoviePoster
