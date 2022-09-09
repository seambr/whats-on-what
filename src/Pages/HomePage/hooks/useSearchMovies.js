import { useEffect, useState } from "react"

import axios from "axios"
function useSearchMovies(searchQuery) {
  const pageNumber = 1
  const [isLoading, setIsLoading] = useState(true)
  const [movieArray, setMovieArray] = useState([])
  const services = JSON.stringify(["netflix", "prime", "hbo", "hulu", "disney"])

  useEffect(() => {
    setMovieArray([])
    let cancel
    setIsLoading(true)
    axios({
      method: "GET",
      // url: `http://192.168.1.207:5000/api/movies/search/`,
      url: `http://localhost:5000/api/movies/search/`,
      params: {
        service: services,
        page: pageNumber,
        title: searchQuery,
        number: 3
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c))
    })
      .then((res) => {
        setMovieArray(res.data.movies)
        setIsLoading(false)
      })
      .catch((err) => {
        if (axios.isCancel(err)) return
        console.error(err)
      })
    return () => cancel()
  }, [searchQuery])

  return { movieArray, isLoading }
}

export default useSearchMovies
