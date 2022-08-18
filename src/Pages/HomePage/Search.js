import React, { useState } from "react"

import { useSearch } from "../../Contexts/SearchContext"
import useDebounce from "./hooks/useDebounce"
import SearchResult from "./SearchResult"
import "./Search.css"

import useSearchMovies from "./hooks/useSearchMovies"
import PosterSkeleton from "../../Skeletons/PosterSkeleton"
function Search() {
  const [search, setSearch] = useState("")
  const debouncedSearch = useDebounce(search, 500)
  const { movieArray, isLoading } = useSearchMovies(debouncedSearch)

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
            {movieArray[0] ? (
              <SearchResult movie={movieArray[0]}></SearchResult>
            ) : null}
            {movieArray[1] ? (
              <SearchResult movie={movieArray[1]}></SearchResult>
            ) : null}
            {movieArray[2] ? (
              <SearchResult movie={movieArray[2]}></SearchResult>
            ) : null}
            {movieArray.length === 0 && <h1>Sorry, Can't Find That</h1>}
          </div>
        )}
      </form>
    </div>
  )
}

export default Search
