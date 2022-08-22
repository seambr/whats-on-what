import React from "react"
import "./MoviePoster.css"
import { Link } from "react-router-dom"

function MoviePoster({ movie, isLast, lastElementRef }) {
  function getLogo(availibility) {
    return <img src={`./logos/${availibility}-icon.png`}></img>
  }

  if (isLast) {
    return (
      <Link to={`/movie/${movie._id}`}>
        <div className='movie-card-container' ref={lastElementRef}>
          <div className='icon'>{getLogo(movie.availibility)}</div>

          <img className='poster' src={movie.posterLink} alt={movie.title} />
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/movie/${movie._id}`}>
      <div className='movie-card-container'>
        <div className='icon'>{getLogo(movie.availibility)}</div>

        <img src={movie.posterLink} alt={movie.title} />
      </div>
    </Link>
  )
}
export default MoviePoster
