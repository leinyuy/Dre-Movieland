import React, { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//f2e4937a
const API_URL = 'http://www.omdbapi.com?apikey=f2e4937a';

const movie1 = {
    "Title": "Superman, Spiderman or Batman",
    "Year": "2011",
    "imdbID": "tt2084949",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.search)
    }

    useEffect(() => {
        searchMovies('Spiderman');

    }, []);

    return (
        <div className="app">
            <h1>DreLand</h1>
            <div className="search">
                <input
                    pladceholder="search for movies"
                    value="superman"
                    onChange={ ()=>{}}
                />
                <img src={SearchIcon}
                    alt="search"
                    onClick={()=>{}}
                />
            </div>
            <div className="container">
                <MovieCard movie1={movie1} />
            </div>

        </div>
    );
    
}

export default App;