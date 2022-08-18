import React from "react"
import "./MoviePoster.css"

import { ReactComponent as Banner } from "./Banner.svg"

function MoviePoster({ movie, isLast, lastElementRef }) {
  function getLogo(availibility) {
    return <img src={`./logos/${availibility}-icon.png`}></img>
  }

  if (isLast) {
    return (
      <div className='movie-card-container' ref={lastElementRef}>
        <div className='icon'>{getLogo(movie.availibility)}</div>

        <img className='poster' src={movie.posterLink} alt={movie.title} />
      </div>
    )
  }

  return (
    <div className='movie-card-container'>
      <div className='icon'>{getLogo(movie.availibility)}</div>
      <img src={movie.posterLink} alt={movie.title} />
    </div>
  )
}
export default MoviePoster
