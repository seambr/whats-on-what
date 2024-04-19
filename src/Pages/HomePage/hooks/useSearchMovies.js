import { useEffect, useState } from "react";

import axios from "axios";
import { apiURL } from "../../../apiURL";
import { supabase } from "../../../utils/supabase";
function useSearchMovies(searchQuery) {
  const [isLoading, setIsLoading] = useState(true);
  const [movieArray, setMovieArray] = useState([]);

  useEffect(() => {
    if (searchQuery !== "") {
      setMovieArray([]);

      setIsLoading(true);
      async function getmovies() {
        const { data: movies, error: error } = await supabase
          .from("movies")
          .select("*")
          .ilike("title", `%av%`)
          .range(0, 3);

        if (!error) {
          setMovieArray(movies);
        }
      }
      getmovies();
    } else {
      setMovieArray([]);
    }
  }, [searchQuery]);

  return { movieArray, isLoading };
}

export default useSearchMovies;
