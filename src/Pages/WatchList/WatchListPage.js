import React, { useEffect, useState } from "react"
import MoviePoster from "../../Components/MoviePoster"
import { useWatchList } from "../../Contexts/WatchListContext"
import axios from "axios"
import "./WatchListPage.css"
function WatchListPage() {
  const { list } = useWatchList()
  const [movieArray, setMovieArray] = useState([])

  useEffect(() => {
    let cancel
    console.log("calling with", list)
    axios({
      method: "GET",
      url: `http://192.168.1.207:5000/api/movies/id/`,
      // url: `http://localhost:5000/api/movies/id/`,
      params: {
        idList: JSON.stringify(list)
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c))
    })
      .then((res) => {
        setMovieArray((old) => (res.data.movies ? res.data.movies : []))
      })
      .catch((err) => {
        if (axios.isCancel(err)) return
        console.error(err)
      })
    return () => cancel()
  }, [list])

  if (movieArray.length > 0) {
    return (
      <div className='grid-container'>
        <div className='movie-grid'>
          {movieArray.map((movie, index) => {
            return <MoviePoster key={index} movie={movie} onWatchList={true} />
          })}
        </div>
      </div>
    )
  }
  return (
    <div className='center'>
      <p style={{ color: "white" }}>Add movies to your watch list.</p>
    </div>
  )
}

export default WatchListPage
