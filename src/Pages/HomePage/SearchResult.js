import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import PosterSkeleton from "../../Skeletons/PosterSkeleton"
import MoviePoster from "../../Components/MoviePoster"
import "./SearchResult.css"
function SearchResult({ movie }) {
  return (
    <div className='result'>
      <div className='result-poster'>
        <img src={movie.posterLink} alt='' />
      </div>

      <div className='details'>
        <p>{movie.title}</p>
        <SkeletonTheme baseColor='#111' highlightColor='#333'>
          <Skeleton count={2}></Skeleton>
        </SkeletonTheme>
        <p style={{ color: "violet" }}>{movie.availibility.toUpperCase()}</p>
      </div>
    </div>
  )
}

export default SearchResult
