import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
