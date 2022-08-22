import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { useParams } from "react-router-dom"
import PosterSkeleton from "../../Skeletons/PosterSkeleton"
import "./MoviePage.css"
function MoviePage() {
  const params = useParams()
  return (
    <div className='movie-page'>
      <SkeletonTheme baseColor='rgb(50,50,50)' highlightColor='rgb(60,60,60)'>
        <div className='movie-page__info-container'>
          <div className='main-container'>
            <PosterSkeleton />
          </div>
          <div className='movie-info'>
            <Skeleton width={80} height={80} circle />
            <Skeleton width={500} height={30} />
            <Skeleton width={400} height={10} />
            <Skeleton width={500} />
            <Skeleton width={470} />
            <Skeleton width={500} />
            <Skeleton width={450} />
            <Skeleton width={470} />
            <Skeleton width={500} />
            <Skeleton width={450} />
            <Skeleton width={470} />
            <Skeleton width={500} />
            <Skeleton width={450} />
            <Skeleton width={470} />
            <Skeleton width={500} />
            <Skeleton width={450} />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  )
}

export default MoviePage
