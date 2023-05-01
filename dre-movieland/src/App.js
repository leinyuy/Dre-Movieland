import React, { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//f2e4937a
const API_URL = 'http://www.omdbapi.com?apikey=f2e4937a';


const App = () => {
    const [movies, setMovies] = useState([]);
    const[searchTerm, setSearchTerm]=useState("")

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
        setSearchTerm("");
        console.log(data)
    }

    useEffect(() => {
        searchMovies('batman');

    }, []);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          searchMovies(searchTerm);
        }
      }


    return (
      <div className="app">
        <h1>DreMovie Search</h1>
        <div className="search">
          <input
            placeholder="search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
                />
                <img src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)} />
        
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    );
    
}

export default App;