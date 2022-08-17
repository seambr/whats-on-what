import { useEffect, useState } from "react"

import axios from "axios"
function useSearchMovies(searchQuery) {
  console.log("ttitietel", searchQuery)
  const pageNumber = 1
  const [isLoading, setIsLoading] = useState(true)
  const [movieArray, setMovieArray] = useState([])
  const services = ["netflix", "prime", "hbo", "hulu"]
  useEffect(() => {
    setMovieArray([])
    let cancel
    // localhost:3000/api/movies/1?services=["netflix","prime"]
    setIsLoading(true)
    axios({
      method: "GET",
      url: `http://localhost:5000/api/movies/search/`,
      params: {
        service: '["netflix","prime","hbo","hulu"]',
        page: pageNumber,
        title: searchQuery
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c))
    })
      .then((res) => {
        console.log(res.data)
        setMovieArray(res.data)
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
