import React from "react";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import MovieList from "./components/movieList/movieList";
import Movie from "./pages/movieDetail/movie";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

