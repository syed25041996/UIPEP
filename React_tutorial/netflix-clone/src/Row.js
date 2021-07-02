import React, { useState, useEffect } from "react";
import axios from './axios';
import "./Row.css";
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/";

const opts ={
  width: '100%',
  height:'400',
  playerVars: {
    autoplay: 1
  }
}

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleonClick = (movie) => {
      if (trailerUrl){
        setTrailerUrl("")
      }else{
        movieTrailer(movie?.name)
        .then(url=>{
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get("v"))
        })
        .catch(err => console.log(err))
      }
  }
  
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className={`row_poster ${isLargeRow && 'row_poster_large'}`}
            key={movie.id}
            onClick={() => handleonClick(movie)}
            src={`${base_url}${isLargeRow? movie.poster_path: movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
