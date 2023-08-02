import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/*" element={<h1>error page not found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

