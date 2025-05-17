import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import '../assets/Movies.css'; 


function Movies() {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [movies, setMovies] = useState([]);
    const apiUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
    const loadGenres = async () => {
        const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${(await axios.get(`${apiUrl}/api/tmdb-key`)).data.key}`
        );
        setGenres(data.genres);
    };
    loadGenres();
    }, [apiUrl]);

    useEffect(() => {
    const fetchMovies = async () => {
        const { data: keyData } = await axios.get(`${apiUrl}/api/tmdb-key`);
        const url = selectedGenre
        ? `https://api.themoviedb.org/3/discover/movie?with_genres=${selectedGenre}&api_key=${keyData.key}`
        : `https://api.themoviedb.org/3/movie/popular?api_key=${keyData.key}`;
        const res = await axios.get(url);
        setMovies(res.data.results);
    };
    fetchMovies();
    }, [selectedGenre, apiUrl]);

    return (
    <div className="movies-page">
        <h1>Movies</h1>
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
        {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={() => {}} />
        ))}
        </div>
    </div>
    );
}
export default Movies;
