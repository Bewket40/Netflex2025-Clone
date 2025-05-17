import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import '../assets/Search.css'; // Assuming you have a CSS file for styling

 function Search() {
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(useLocation().search).get('q');
  const apiUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchSearch = async () => {
      const { data } = await axios.get(`${apiUrl}/api/tmdb-key`);
      const apiKey = data.key;
      const [movieRes, tvRes] = await Promise.all([
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`),
        axios.get(`https://api.themoviedb.org/3/search/tv?query=${query}&api_key=${apiKey}`),
      ]);
      setResults([...movieRes.data.results, ...tvRes.data.results]);
    };

    if (query) fetchSearch();
  }, [query, apiUrl]);

  return (
    <div className="movies-page">
      <h1>Search Results for: {query}</h1>
      <div className="movie-grid">
        {results.length > 0 ? (
          results.map((item) => <MovieCard key={item.id} movie={item} onClick={() => {}} />)
        ) : (
          <p style={{ color: '#bbb' }}>No results found.</p>
        )}
      </div>
    </div>
  );
}
export default Search;