import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "...." : str;
  }

  return (
    <React.Fragment>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `url(${base_url}${movies?.backdrop_path})`,
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movies?.title || movies?.name || movies?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button">
              Play
            </button>
            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">
            {truncate(movies?.overview, 150)}
          </h1>
        </div>
        <div className="banner_fadebottom"></div>
      </header>
    </React.Fragment>
  );
}

export default Banner;
