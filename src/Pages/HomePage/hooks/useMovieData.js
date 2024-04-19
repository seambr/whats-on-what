import { useEffect, useState } from "react";
import { useSearch } from "../../../Contexts/SearchContext.js";
import { apiURL } from "../../../apiURL.js";
import axios from "axios";
import { supabase } from "../../../utils/supabase.js";
function useMovieData(pageNumber, setPageNumber) {
  const { query } = useSearch();
  const [isLoading, setIsLoading] = useState(true);
  const [movieArray, setMovieArray] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const services = Object.keys(query.subscribedServices).filter(
    (s) => query.subscribedServices[s]
  );
  let genreList;
  if (query.genreList.length > 0) {
    genreList = Object.keys(query.genreList).filter((g) => query.genreList[g]);
  } else {
    genreList = [
      "Action",
      "Adventure",
      "Animation",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "History",
      "Horror",
      "Music",
      "Mystery",
      "Romance",
      "Science Fiction",
      "TV Movie",
      "Thriller",
      "War",
      "Western",
    ];
  }
  console.log(genreList);
  useEffect(() => {
    setMovieArray([]);
    setPageNumber(1);
  }, [query]);

  useEffect(() => {
    setIsLoading(true);

    async function getmovies() {
      const { data: movies, error: error } = await supabase
        .from("movies")
        .select("*")
        .overlaps("availability", services)
        .overlaps("genres", genreList)
        .range(pageNumber * 20, pageNumber * 20 + 20 - 1);

      if (!error && movies.length > 1) {
        setMovieArray((old) => [...old, ...movies]);
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    }
    getmovies();
    setIsLoading(false);
  }, [query, pageNumber]);

  return { movieArray, isLoading, hasMore };
}

export default useMovieData;
