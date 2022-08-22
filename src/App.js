import "./App.css"
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage"
import SearchProvider from "./Contexts/SearchContext"
import Hero from "./Pages/HomePage/Hero"
import MoviePage from "./Pages/MoviePage/MoviePage"

function App() {
  return (
    <div className='app'>
      <SearchProvider>
        <div className='fixed'>
          <Hero />
        </div>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>

          <Route path='/movie/:id' element={<MoviePage />}></Route>
        </Routes>
      </SearchProvider>
    </div>
  )
}

export default App
