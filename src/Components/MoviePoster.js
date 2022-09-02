import React from "react"
import "./MoviePoster.css"
import { Link } from "react-router-dom"
import { useWatchList } from "../Contexts/WatchListContext"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
function MoviePoster({ movie, isLast, lastElementRef }) {
  const { list, setList } = useWatchList()
  function getLogo(availibility) {
    return <img src={`../logos/${availibility}-icon.png`}></img>
  }

  function isInWatchList() {
    if (list.includes(movie._id)) {
      return true
    }
    return false
  }

  return (
    <div className='poster-container'>
      {!isInWatchList() ? (
        <div
          className='save-to-watchlist'
          onClick={() => setList((oldList) => [...oldList, movie._id])}>
          <AiOutlineStar size={25} color='white' />
        </div>
      ) : (
        <div
          className='save-to-watchlist'
          onClick={() =>
            setList((oldList) => oldList.filter((id) => id !== movie._id))
          }>
          <AiFillStar size={25} color='gold' />
        </div>
      )}
      <Link to={`/movie/${movie._id}`} state={{ movie: movie }}>
        {isLast ? (
          <div className='movie-card-container' ref={lastElementRef}>
            <div className='icon'>{getLogo(movie.availibility)}</div>
            <img className='poster' src={movie.posterLink} alt={movie.title} />
          </div>
        ) : (
          <div className='movie-card-container'>
            <div className='icon'>{getLogo(movie.availibility)}</div>
            <img className='poster' src={movie.posterLink} alt={movie.title} />
          </div>
        )}
      </Link>
    </div>
  )
}
export default MoviePoster
