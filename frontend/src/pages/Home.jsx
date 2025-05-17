import { useEffect, useState } from 'react';
import axios from 'axios';
import HeroBanner from '../components/HeroBanner';
import Row from '../components/Row'
import '../assets/Home.css';

    function Home() {
    const [featured, setFeatured] = useState(null);
    const [apiKey, setApiKey] = useState('');

    useEffect(() => {
    async function load() {
        try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/tmdb-key`);
        const key = res.data.key;
        setApiKey(key);

        const trendingRes = await axios.get(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`
        );
        const movies = trendingRes.data.results;
        setFeatured(movies[0]); // Use the first movie as banner
        } catch (err) {
        console.error('Failed to load API key or trending movies:', err);
        }
    }

    load();
    }, []);

    return (
    <div className="home">
        {featured && <HeroBanner movie={featured} />}

        {apiKey && (
        <>
            <Row title="Trending Now" fetchPath="https://api.themoviedb.org/3/trending/all/week" apiKey={apiKey} />
            <Row title="Top Rated" fetchPath="https://api.themoviedb.org/3/movie/top_rated" apiKey={apiKey} />
            <Row title="Action Movies" fetchPath="https://api.themoviedb.org/3/discover/movie?with_genres=28" apiKey={apiKey} />
            <Row title="Comedy Movies" fetchPath="https://api.themoviedb.org/3/discover/movie?with_genres=35" apiKey={apiKey} />
            <Row title="Horror Movies" fetchPath="https://api.themoviedb.org/3/discover/movie?with_genres=27" apiKey={apiKey} />
            <Row title="Romance Movies" fetchPath="https://api.themoviedb.org/3/discover/movie?with_genres=10749" apiKey={apiKey} />
        </>
        )}
    </div>
    );
}

export default Home;


// This code defines a React component called Home that serves as the main page of a Netflix clone application. The component fetches and displays a hero banner with a featured movie and several rows of movie cards categorized by genre. It uses the useEffect hook to fetch the TMDB API key and trending movies when the component mounts. The fetched data is stored in state variables using the useState hook.
// The component uses the HeroBanner and Row components to display the featured movie and the rows of movies, respectively. The fetchPath prop is used to specify the API endpoint for each row of movies. The component is styled using an external CSS file (Home.css).
// The Home component can be improved by adding features such as error handling to display a message if the movie data cannot be retrieved, and loading indicators while the data is being fetched. Additionally, the component could be made responsive to ensure it looks good on different screen sizes, and accessibility features could be added to improve usability for all users. Overall, this code provides a solid foundation for the home page of a Netflix clone application built with React.
// The Home component can also be made more customizable by allowing the parent component to pass in additional props, such as the number of rows to display or whether to show a loading spinner while the data is being fetched. This would make the component more flexible and reusable across different parts of the application. Overall, this code provides a solid foundation for the home page of a Netflix clone application built with React.
