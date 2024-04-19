import React from "react";

import { BsFillBookmarkPlusFill, BsFillBookmarkDashFill } from "react-icons/bs";
import { useWatchList } from "../Contexts/WatchListContext";

function WatchListButton({ movie }) {
  const { list, setList } = useWatchList();
  function isInWatchList() {
    if (list.includes(movie.id)) {
      return true;
    }
    return false;
  }

  return !isInWatchList() ? (
    <div
      className="save-to-watchlist"
      onClick={() => setList((oldList) => [...oldList, movie.id])}
    >
      <BsFillBookmarkPlusFill size={"1.7vmax"} color="white" />
    </div>
  ) : (
    <div
      className="save-to-watchlist"
      onClick={() =>
        setList((oldList) => oldList.filter((id) => id !== movie.id))
      }
    >
      <BsFillBookmarkDashFill size={"1.7vw"} color="gold" />
    </div>
  );
}

export default WatchListButton;
