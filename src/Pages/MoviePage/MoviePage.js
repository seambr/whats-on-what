import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { useLocation, useParams } from "react-router-dom"
import MoviePoster from "../../Components/MoviePoster"
import PosterSkeleton from "../../Skeletons/PosterSkeleton"

import "./MoviePage.css"
function MoviePage() {
  const params = useParams()
  const location = useLocation()
  const { movie } = location.state
  return (
    <div className='movie-page'>
      <SkeletonTheme baseColor='rgb(50,50,50)' highlightColor='rgb(60,60,60)'>
        <div className='movie-page__info-container'>
          <div className='main-container'>
            <MoviePoster movie={movie} />
          </div>
          <div className='movie-info'>
            <h1 style={{ color: "white", fontWeight: "400", margin: "0" }}>
              {movie.title}
            </h1>
            <h4 style={{ color: "white", fontWeight: "300", margin: "0" }}>
              Rating: {movie.rating}
            </h4>
            <p style={{ color: "#ddd" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati quisquam minima dignissimos tenetur repudiandae corrupti
              alias eveniet iure consequatur a soluta eos quasi, natus dicta
              sint doloremque culpa sunt totam, qui aperiam debitis architecto!
              Magni rerum commodi at fugiat debitis laboriosam alias adipisci
              velit eaque ipsam rem delectus suscipit nam, tempore repellat,
              accusantium hic ut officia odio sed quidem. Dolorem excepturi
              reprehenderit rem aliquam, enim nobis tenetur quaerat ut expedita?
            </p>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  )
}

export default MoviePage
