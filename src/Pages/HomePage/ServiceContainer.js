import React, { useContext, useState } from "react";
import { BsBookmarksFill } from "react-icons/bs";
import { useSearch } from "../../Contexts/SearchContext.js";
import { AiFillHome } from "react-icons/ai";
import GenreTag from "../../Components/GenreTag.js";
import FiltersButton from "./FiltersButton.js";
import { Link } from "react-router-dom";
function ServiceContainer() {
  // ideally these serevices/genres wouldnt be hard coded, but i dont plan on expanding
  const genreList = [
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
  const services = ["NETFLIX", "PRIME", "MAX", "HULU", "DISNEY"];
  const [show, setShow] = useState(false);

  return (
    <div className="wrapper-bar">
      <div className="left-bar">
        {show && <FilterContainer genreList={genreList} />}
        <Link to="/">
          <AiFillHome color="white" className="left-icon home-icon" size="30" />
        </Link>
        <div className="services">
          {services.map((s, i) => (
            <Service
              key={i}
              service={s}
              imgSource={`../logos/${s.toLowerCase()}-icon.svg`}
            ></Service>
          ))}
        </div>
        <div className="divider" />
        <Link to="/watchlist">
          <BsBookmarksFill className="left-icon" size="30" />
        </Link>
        <FiltersButton onClick={() => setShow((e) => !e)} />
        {/* <span className="open-privacy-policy">Privacy Policy</span> */}
      </div>
    </div>
  );
}

function FilterContainer({ genreList }) {
  return (
    <div className="filter-container">
      <h1>Filters</h1>
      <h4>Genres</h4>
      <div className="random-cont">
        {genreList.map((g, i) => (
          <GenreTag text={g} key={i} clickable fontSize="0.7rem" />
        ))}
      </div>
    </div>
  );
}

function Service({ service, imgSource }) {
  const { query, setQuery } = useSearch();
  const numSubscribed = Object.keys(query.subscribedServices).filter(
    (key) => query.subscribedServices[key] === true
  );

  function updateServiceList() {
    if (query.subscribedServices[service] && numSubscribed.length === 1) return;
    setQuery((old) => ({
      ...old,
      subscribedServices: {
        ...old.subscribedServices,
        [service]: !old.subscribedServices[service],
      },
    }));
  }

  return (
    <div className="subscription-logo-container" onClick={updateServiceList}>
      <img
        className={query.subscribedServices[service] ? "selected" : ""}
        src={imgSource}
        alt={service}
      />
    </div>
  );
}

export default ServiceContainer;
