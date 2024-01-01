import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { apiURL } from "../../apiURL"
import GenreTag from "../../Components/GenreTag"
import LargeButton from "../../Components/LargeButton"
import MovieRating from "../../Components/MovieRating"
import RatingStars from "../../Components/RatingStars"
import ServiceAvailibilityLogos from "../../Components/ServiceAvailibilityLogos"
import "./MoviePage.css"
const tagStyle = {
  color: "#fefbea",
  marginTop: 0,
  fontWeight: "normal",
  fontSize: "12px",
  marginTop: "1em",
}
const titleStyle = {
  color: "white",
  fontSize: "2em",
  marginBottom: 0,
  marginTop: 0,
}
const summaryStyle = {
  color: "white",
  marginTop: "1em",
  fontWeight: "normal",
  fontSize: "16px",
}
function MoviePage() {
  // Link Params
  const params = useParams()
  const [movie, setMovie] = useState(null)
  // Gets movie via the id in the link
  useEffect(() => {
    let cancel
    axios({
      method: "GET",
      url: `${apiURL}/api/movies/byId/`,
      params: {
        id: params.id,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setMovie(res.data.movie)
      })
      .catch((err) => {
        if (axios.isCancel(err)) return
        console.error(err)
      })

    return () => cancel()
  }, [params.id])

  if (!movie) return <div />

  return (
    <main className="movie-page page">
      <section className="movie-info">
        <div className="darken" />
        <img
          id="movie-page-backdrop"
          src={movie.backdropLink}
          alt={`Movie backdrop for ${movie.title}`}
          draggable="false"
        />
        <div className="movie-page-contents">
          <img
            id="movie-page-poster"
            src={movie.posterLink.replace("w220_and_h330_face", "original")}
            alt={`Movie poster for ${movie.title}`}
            draggable="false"
          />
          <div className="movie-page-text">
            <div className="title-rating">
              <h1 style={titleStyle}>{movie.title}</h1>
              <MovieRating rating={movie.rating} />
            </div>
            <div className="runtime-rating">
              <span
                style={{
                  paddingLeft: "0.5em",
                  color: "#aaa",
                  fontSize: "0.8em",
                }}
              >
                {movie.runtime}
              </span>
              <RatingStars rating={movie.score} color="gold" />
            </div>
            <p className="summary" style={summaryStyle}>
              {movie.summary}
            </p>
            <div className="row-flex" style={{ margin: "1em 0 2em 0" }}>
              {movie.genres.map((e) => (
                <GenreTag text={e} key={e} fontSize="12px" />
              ))}
            </div>

            <LargeButton link={movie.trailerLink} />
            {movie.tagline !== "false" && (
              <h5 style={tagStyle}>"{movie.tagline}"</h5>
            )}
            <span
              style={{
                color: "lightgray",
                fontWeight: "bold",
                marginTop: "2em",
              }}
            >
              Watch Now On
            </span>
            <div className="row-flex" style={{ paddingBottom: "5em" }}>
              <ServiceAvailibilityLogos
                availibility={movie.availibility}
                rounded
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MoviePage
