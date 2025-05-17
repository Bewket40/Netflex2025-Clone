import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import '../assets/TVShows.css'; 

    function TVShows() {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [shows, setShows] = useState([]);
    const apiUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
    const loadGenres = async () => {
        const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=${(await axios.get(`${apiUrl}/api/tmdb-key`)).data.key}`
        );
        setGenres(data.genres);
    };
    loadGenres();
    }, [apiUrl]);

    useEffect(() => {
    const fetchShows = async () => {
        const { data: keyData } = await axios.get(`${apiUrl}/api/tmdb-key`);
        const url = selectedGenre
        ? `https://api.themoviedb.org/3/discover/tv?with_genres=${selectedGenre}&api_key=${keyData.key}`
        : `https://api.themoviedb.org/3/tv/popular?api_key=${keyData.key}`;
        const res = await axios.get(url);
        setShows(res.data.results);
    };
    fetchShows();
    }, [selectedGenre, apiUrl]);

    return (
    <div className="movies-page">
        <h1>TV Shows</h1>
        <div className="genre-filter">
        <button onClick={() => setSelectedGenre('')} className={!selectedGenre ? 'active' : ''}>All</button>
        {genres.map((genre) => (
            <button
            key={genre.id}
            onClick={() => setSelectedGenre(genre.id)}
            className={selectedGenre === genre.id ? 'active' : ''}
            >
            {genre.name}
            </button>
        ))}
        </div>
        <div className="movie-grid">
        {shows.map((show) => (
            <MovieCard key={show.id} movie={show} onClick={() => {}} />
        ))}
        </div>
    </div>
    );
}
export default TVShows;
// This code is a React component that fetches and displays TV shows from the TMDB API.