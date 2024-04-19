import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SearchProvider from "./Contexts/SearchContext";
import Hero from "./Pages/HomePage/Hero";
import MoviePage from "./Pages/MoviePage/MoviePage";
import WatchListPage from "./Pages/WatchList/WatchListPage";
import WatchListProvider from "./Contexts/WatchListContext";
import ServiceContainer from "./Pages/HomePage/ServiceContainer";

function App() {
  return (
    <>
      <div className="blur" />
      <div className="app">
        <SearchProvider>
          <Hero />
          <ServiceContainer />
          <WatchListProvider>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/watchlist" element={<WatchListPage />}></Route>
              <Route path="/movie/:id" element={<MoviePage />}></Route>
            </Routes>
          </WatchListProvider>
        </SearchProvider>
      </div>
    </>
  );
}

export default App;
