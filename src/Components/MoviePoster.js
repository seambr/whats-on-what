import React from "react"
import "./MoviePoster.css"
import { Link } from "react-router-dom"
import { useWatchList } from "../Contexts/WatchListContext"
import { BsPlusLg, BsXLg } from "react-icons/bs"
function MoviePoster({ movie, isLast, lastElementRef }) {
  const { list, setList } = useWatchList()
  function getLogo(availibility) {
    return <img src={`./logos/${availibility}-icon.png`}></img>
  }

  function isInWatchList() {
    if (list.includes(movie._id)) {
      return true
    }
    return false
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
    <div className='poster-container'>
      {!isInWatchList() ? (
        <div
          className='save-to-watchlist'
          onClick={() => setList((oldList) => [...oldList, movie._id])}>
          <BsPlusLg size={25} color='white' />
        </div>
      ) : (
        <div
          className='save-to-watchlist'
          onClick={() =>
            setList((oldList) => oldList.filter((id) => id !== movie._id))
          }>
          <BsXLg size={25} color='#333' />
        </div>
      )}

      <Link to={`/movie/${movie._id}`}>
        <div className='movie-card-container'>
          <div className='icon'>{getLogo(movie.availibility)}</div>

          <img src={movie.posterLink} alt={movie.title} />
        </div>
      </Link>
    </div>
  )
}
export default MoviePoster
