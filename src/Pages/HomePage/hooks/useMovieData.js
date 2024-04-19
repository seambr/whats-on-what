import { useEffect, useState } from "react";
import { useSearch } from "../../../Contexts/SearchContext.js";
import { apiURL } from "../../../apiURL.js";
import axios from "axios";
import { supabase } from "../../../utils/supabase.js";
function useMovieData(pageNumber, setPageNumber) {
  const { query } = useSearch();
  const [isLoading, setIsLoading] = useState(true);
  const [movieArray, setMovieArray] = useState([]);
  const [hasMore, setHasMore] = useState(false);
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

  useEffect(() => {
    setMovieArray([]);
    setPageNumber(1);
  }, [query]);
  console.log(services);
  useEffect(() => {
    setIsLoading(true);

    async function getmovies() {
      const { data: movies, error: error } = await supabase
        .from("movies")
        .select("*")
        .overlaps("availability", services)
        .overlaps("genres", genreList)
        .range(pageNumber * 20, pageNumber * 20 + 20 - 1);

      console.log(error);
      if (movies.length > 1) {
        setMovieArray((old) => [...old, ...movies]);
      }
    }
    getmovies();
    setIsLoading(false);
    setHasMore(true);

    // axios({
    //   method: "GET",
    //   url: `${apiURL}/api/movies/items/`,
    //   params: {
    //     service: services,
    //     page: pageNumber,
    //     title: query.title,
    //     genreList: genreList,
    //     type: query.type,
    //   },
    //   cancelToken: new axios.CancelToken((c) => (cancel = c)),
    // })
    //   .then((res) => {
    //     setMovieArray((old) => [...old, ...res.data.movies])
    //     setIsLoading(false)
    //     setHasMore(res.data.totalFound > movieArray.length)
    //   })
    //   .catch((err) => {
    //     if (axios.isCancel(err)) return
    //     console.error(err)
    //   })

    // return () => cancel()
  }, [query, pageNumber]);

  return { movieArray, isLoading, hasMore };
}

export default useMovieData;
