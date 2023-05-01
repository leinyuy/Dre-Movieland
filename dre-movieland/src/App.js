import React, { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';


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
        console.log(data)
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
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt ={movie1.Title}/>
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
            </div>
            </div>

        </div>
    );
    
}

export default App;