import React, { useEffect, useState } from "react";
import MoviePoster from "../../Components/MoviePoster";
import { useWatchList } from "../../Contexts/WatchListContext";

import "./WatchListPage.css";

import { supabase } from "../../utils/supabase";
function WatchListPage() {
  const { list } = useWatchList();
  const [movieArray, setMovieArray] = useState([]);

  useEffect(() => {
    console.log("calling with", list);

    async function getmovies() {
      const { data: movies, error: error } = await supabase
        .from("movies")
        .select("*")
        .in("id", list)
        .range(0, 3);

      if (!error) {
        setMovieArray(movies);
      }
    }
    getmovies();
  }, []);

  if (movieArray.length > 0) {
    return (
      <div className="watch-list-page">
        <div className="movie-grid">
          {movieArray.map((movie, index) => {
            return (
              <MoviePoster
                key={index}
                movie={movie}
                onWatchList={true}
                showAvailibility={1}
              />
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="center">
      <p style={{ color: "white" }}>Add movies to your watch list.</p>
    </div>
  );
}

export default WatchListPage;
