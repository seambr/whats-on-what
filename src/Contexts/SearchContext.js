import React, { useContext, useState } from "react"

const SearchContext = React.createContext()

export function useSearch() {
  return useContext(SearchContext)
}
function SearchProvider(props) {
  const [query, setQuery] = useState({
    search: "",
    genre: "",
    type: "movie",
    subscribedServices: {
      netflix: true,
      prime: false,
      hbo: false,
      hulu: false
    }
  })

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchProvider
