import React, { useCallback, useRef, useState } from "react"
import "./Grid.css"
import useMovieData from "./hooks/useMovieData"
import MoviePoster from "../../Components/MoviePoster"
import PosterSkeleton from "../../Skeletons/PosterSkeleton"
import Skeleton from "react-loading-skeleton"

function Grid() {
  const [pageNumber, setPageNumber] = useState(1)
  const { movieArray, isLoading } = useMovieData(pageNumber, setPageNumber)
  const observer = useRef()

  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((old) => old + 1)
        }
      })

      if (node) observer.current.observe(node)
    },
    [isLoading]
  )

  return (
    <div className='grid-container'>
      <div className='movie-grid'>
        {isLoading && <PosterSkeleton></PosterSkeleton>}

        {movieArray.map((movie, index) => {
          if (index === movieArray.length - 1) {
            return (
              <MoviePoster
                key={index}
                movie={movie}
                isLast={true}
                lastElementRef={lastElementRef}></MoviePoster>
            )
          }
          return <MoviePoster key={index} movie={movie}></MoviePoster>
        })}
        {isLoading && <h1>Loading...</h1>}
      </div>
    </div>
  )
}

export default Grid
