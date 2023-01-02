import { useEffect, useState } from "react"
import { useSearch } from "../../../Contexts/SearchContext.js"
import { apiURL } from "../../../apiURL.js"
import axios from "axios"
function useMovieData(pageNumber, setPageNumber) {
	const { query } = useSearch()
	const [isLoading, setIsLoading] = useState(true)
	const [movieArray, setMovieArray] = useState([])
	const [hasMore, setHasMore] = useState(false)
	const services = JSON.stringify(
		Object.keys(query.subscribedServices).filter(
			s => query.subscribedServices[s]
		)
	)
	const genreList = JSON.stringify(
		Object.keys(query.genreList).filter(g => query.genreList[g])
	)

	useEffect(() => {
		setMovieArray([])
		setPageNumber(1)
	}, [query])

	useEffect(() => {
		let cancel
		setIsLoading(true)

		axios({
			method: "GET",
			url: `http://${apiURL}:5000/api/movies/items/`,
			params: {
				service: services,
				page: pageNumber,
				title: query.title,
				genreList: genreList,
				type: query.type,
			},
			cancelToken: new axios.CancelToken(c => (cancel = c)),
		})
			.then(res => {
				setMovieArray(old => [...old, ...res.data.movies])
				setIsLoading(false)
				setHasMore(res.data.totalFound > movieArray.length)
			})
			.catch(err => {
				if (axios.isCancel(err)) return
				console.error(err)
			})

		return () => cancel()
	}, [query, pageNumber])

	return { movieArray, isLoading, hasMore }
}

export default useMovieData
