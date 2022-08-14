import React, { useCallback, useRef, useState } from "react"
import "./Grid.css"
import axios from "axios"
import { SubscriptionContext } from "./HomePage.js"
import useMovieData from "./hooks/useMovieData"
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
    <>
      <div className='movie-grid'>
        {movieArray.map((movie, index) => {
          if (index === movieArray.length - 1) {
            return (
              <div className='movie-card-container' ref={lastElementRef}>
                <img src={movie.posterLink} alt={movie.title} />
              </div>
            )
          }
          return (
            <div className='movie-card-container'>
              <img src={movie.posterLink} alt={movie.title} />
            </div>
          )
        })}
        {isLoading && <h1>Loading...</h1>}
      </div>
    </>
  )
}

export default Grid
