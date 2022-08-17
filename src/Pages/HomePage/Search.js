import React, { useState } from "react"

import { useSearch } from "../../Contexts/SearchContext"

import SearchResult from "./SearchResult"
import "./Search.css"

import useSearchMovies from "./hooks/useSearchMovies"
function Search() {
  const [search, setSearch] = useState("")
  const { movieArray, isLoading } = useSearchMovies(search)

  //   onChange={(e) =>
  //     setQuery((old) => ({ ...old, title: e.target.value }))
  //   }
  console.log(search)
  console.log(movieArray)
  return (
    <div className='search-container'>
      <form action=''>
        <input
          value={search}
          placeholder='Search...'
          className='movie-search'
          type='text'
          onChange={(e) => setSearch(e.target.value)}
        />
        {search.length > 0 && !isLoading && (
          <div className='search-results'>
            <SearchResult movie={movieArray[0]}></SearchResult>
            <SearchResult movie={movieArray[1]}></SearchResult>
            <SearchResult movie={movieArray[2]}></SearchResult>
          </div>
        )}
      </form>
    </div>
  )
}

export default Search
