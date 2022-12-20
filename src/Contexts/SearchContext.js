import React, { useContext, useState } from "react"

const SearchContext = React.createContext()

export function useSearch() {
	return useContext(SearchContext)
}
function SearchProvider(props) {
	const [query, setQuery] = useState({
		search: "",
		genreList: {
			Action: false,
			Adventure: false,
			Animation: false,
			Comedy: false,
			Crime: false,
			Documentary: false,
			Drama: false,
			Family: false,
			Fantasy: false,
			History: false,
			Horror: false,
			Music: false,
			Mystery: false,
			Romance: false,
			"Science Fiction": false,
			"TV Movie": false,
			Thriller: false,
			War: false,
			Western: false,
		},
		type: "movie",
		subscribedServices: {
			netflix: true,
			prime: false,
			hbo: false,
			hulu: false,
			disney: false,
		},
	})

	return (
		<SearchContext.Provider value={{ query, setQuery }}>
			{props.children}
		</SearchContext.Provider>
	)
}

export default SearchProvider
