import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Header() {
  return (
    <div className="header">
        <div className="headerLeft">
            <Link to="/"><img className="header_icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png" alt="img"/></Link>
            <Link to="/movies/popular" style={{textDecoration: "none"}}><span>popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>top rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>upcoming</span></Link>
        </div>
    </div>
  );
}

export default Header;