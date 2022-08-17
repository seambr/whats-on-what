import React from "react"
import "./MoviePoster.css"

import { SiNetflix, SiPrime } from "react-icons/si"
import { FaMaxcdn } from "react-icons/fa"
import { ReactComponent as Banner } from "./Banner.svg"

function MoviePoster({ movie, isLast, lastElementRef }) {
  function getLogo(availibility) {
    switch (availibility) {
      case "netflix":
        return <SiNetflix color='red' size={30}></SiNetflix>
      case "prime":
        return <SiPrime color='#00A8E1' size={35}></SiPrime>
      case "hbo":
        return <FaMaxcdn color='purple' size={35}></FaMaxcdn>
      default:
        break
    }
  }
  if (isLast) {
    return (
      <div className='movie-card-container' ref={lastElementRef}>
        <div className='movie-card-banner'>
          <div className='icon'>{getLogo(movie.availibility)}</div>
          <Banner></Banner>
        </div>
        <img src={movie.posterLink} alt={movie.title} />
      </div>
    )
  }

  return (
    <div className='movie-card-container'>
      <div className='movie-card-banner'>
        <div className='icon'>{getLogo(movie.availibility)}</div>
        <Banner></Banner>
      </div>
      <img src={movie.posterLink} alt={movie.title} />
    </div>
  )
}

export default MoviePoster
