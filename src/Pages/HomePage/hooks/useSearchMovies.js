import { useEffect, useState } from "react"

import axios from "axios"
import { apiURL } from "../../../apiURL"
function useSearchMovies(searchQuery) {
	const [isLoading, setIsLoading] = useState(true)
	const [movieArray, setMovieArray] = useState([])

	useEffect(() => {
		setMovieArray([])
		let cancel
		setIsLoading(true)
		axios({
			method: "GET",

			url: `http://${apiURL}:5000/api/movies/search/`,
			params: {
				title: searchQuery,
				number: 3,
			},
			cancelToken: new axios.CancelToken(c => (cancel = c)),
		})
			.then(res => {
				setMovieArray(res.data.movies)
				setIsLoading(false)
			})
			.catch(err => {
				if (axios.isCancel(err)) return
				console.error(err)
			})
		return () => cancel()
	}, [searchQuery])

	return { movieArray, isLoading }
}

export default useSearchMovies
