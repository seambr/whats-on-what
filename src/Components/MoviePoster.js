import React from "react"
import "./MoviePoster.css"
import { Link } from "react-router-dom"

import WatchListButton from "./WatchListButton"
function MoviePoster({ movie, isLast, lastElementRef, showAvailibility }) {
	function getLogo(availibility) {
		return (
			<>
				<img
					src={`../logos/${availibility[0]}-icon.png`}
					alt={availibility[0]}
				/>
				{availibility[1] && (
					<img
						src={`../logos/${availibility[1]}-icon.png`}
						alt={availibility[1]}
					/>
				)}
			</>
		)
	}

	return (
		<div className="poster-container">
			<WatchListButton movie={movie} />

			<Link to={`/movie/${movie._id}`} state={{ movie: movie }}>
				{isLast ? (
					<div className="movie-card-container" ref={lastElementRef}>
						<div className="icon">{getLogo(movie.availibility)}</div>
						<img className="poster" src={movie.posterLink} alt={movie.title} />
					</div>
				) : (
					<div className="movie-card-container">
						{showAvailibility && (
							<div className="icon">{getLogo(movie.availibility)}</div>
						)}
						<img className="poster" src={movie.posterLink} alt={movie.title} />
					</div>
				)}
			</Link>
		</div>
	)
}

export default MoviePoster
