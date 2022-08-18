import React, { useEffect, useState } from "react"
import { useSearch } from "../../../Contexts/SearchContext.js"

import axios from "axios"
function useMovieData(pageNumber, setPageNumber) {
  const { query } = useSearch()
  const [isLoading, setIsLoading] = useState(true)
  const [movieArray, setMovieArray] = useState([])
  const services = JSON.stringify(
    Object.keys(query.subscribedServices).filter(
      (s) => query.subscribedServices[s]
    )
  )
  useEffect(() => {
    setMovieArray([])
    setPageNumber(1)
  }, [query])
  useEffect(() => {
    let cancel
    // localhost:3000/api/movies/1?services=["Netflix","Prime"]
    setIsLoading(true)
    axios({
      method: "GET",
      url: `http://localhost:5000/api/movies/search/`,
      params: { service: services, page: pageNumber, title: query.title },
      cancelToken: new axios.CancelToken((c) => (cancel = c))
    })
      .then((res) => {
        setMovieArray((old) => [...old, ...res.data])
        setIsLoading(false)
      })
      .catch((err) => {
        if (axios.isCancel(err)) return
        console.error(err)
      })
    return () => cancel()
  }, [query, pageNumber])

  return { movieArray, isLoading }
}

export default useMovieData
