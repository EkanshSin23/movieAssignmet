import Home from "./Pages/home/Home";
import {
  Routes, Route,
} from 'react-router-dom';
import React from "react";
import MovieDetails from "./Pages/moviedetails/MovieDetails";
import './app.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movieDetials/:id' element={<MovieDetails />} />
    </Routes>

  );
}

export default App;
