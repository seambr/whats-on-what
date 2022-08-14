import React, { useContext, useEffect, useState } from "react"
import { SubscriptionContext } from "../HomePage.js"
import axios from "axios"
function useMovieData(pageNumber, setPageNumber) {
  const { subscribedServices, setSubscribedServices } =
    useContext(SubscriptionContext)
  const [isLoading, setIsLoading] = useState(true)
  const [movieArray, setMovieArray] = useState([])
  const services = JSON.stringify(
    Object.keys(subscribedServices).filter((s) => subscribedServices[s])
  )
  useEffect(() => {
    setMovieArray([])
    setPageNumber(1)
  }, [subscribedServices])
  useEffect(() => {
    let cancel

    // localhost:3000/api/movies/1?services=["Netflix","Prime"]
    console.log("FETCHING PAGE", pageNumber)
    setIsLoading(true)
    axios({
      method: "GET",
      url: `http://localhost:5000/api/movies/`,
      params: { service: services, page: pageNumber },
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
  }, [subscribedServices, pageNumber])

  return { movieArray, isLoading }
}

export default useMovieData
