
import { useEffect, useState,useRef } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import TrailerModal from '../components/TrailerModal'
import '../assets/Row.css';

    function Row({ title, fetchPath, apiKey }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    async function fetchData() {
      try {
        const separator = fetchPath.includes('?') ? '&' : '?';
        const fullUrl = `${fetchPath}${separator}api_key=${apiKey}`;
        const movieRes = await axios.get(fullUrl);
        setMovies(movieRes.data.results);
        console.log(`✅ Loaded ${title} movies:`, movieRes.data.results);
      } catch (error) {
        console.error(`❌ Failed to fetch movies for ${title}:`, error);
      }
    }

    if (apiKey) fetchData();
}, [fetchPath, apiKey, title]);
// scroll handler
  // const scroll = (direction) => {
  //   const { current } = scrollRef;
  //   if (current) {
  //       const scrollAmount = direction === 'left' ? -400 : 400;
  //       current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  //   }
  //   };
  // console.log(apiKey)
  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };


    return (
    <div className="row">
        <h2 className="row-title">{title}</h2>
        <div className="scroll-controls">
        <button className="scroll-btn left" onClick={() => scroll('left')}>◀</button>
        <div className="row-scroll-container" ref={scrollRef}>
            {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} />
            ))}

        </div>
        <button className="scroll-btn right" onClick={() => scroll('right')}>▶</button>
        </div>

          {selectedMovie && (
        <TrailerModal
          movie={selectedMovie}
          apiKey={apiKey}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
    );
}

export default Row;


// This code defines a React component called Row that fetches and displays a list of movies in a horizontal row format. The component takes two props: title (the title of the row) and fetchUrl (the URL to fetch the movie data from). It uses the useEffect hook to fetch the movie data when the component mounts or when the fetchUrl changes, and stores the movie data in a state variable called movies. The component then maps over the movies array to render a MovieCard component for each movie, passing the movie data as a prop. The component is styled using an external CSS file (Row.css).
// The Row component can be improved by adding features such as lazy loading for better performance, error handling to display a message if the movie data cannot be retrieved, and loading indicators while the data is being fetched. Additionally, the component could be made responsive to ensure it looks good on different screen sizes, and accessibility features could be added to improve usability for all users. Overall, this code provides a solid foundation for a row of movie cards in a Netflix clone application built with React.
// The Row component can be further enhanced by adding features such as pagination or infinite scrolling to allow users to browse through a larger number of movies without overwhelming them with too many options at once. Additionally, the component could include hover effects on the movie cards to provide more information about each movie, such as ratings or release dates. Overall, this code provides a solid foundation for a row of movie cards in a Netflix clone application built with React.
// The Row component can also be made more customizable by allowing the parent component to pass in additional props, such as the number of columns to display or whether to show a loading spinner while the data is being fetched. This would make the component more flexible and reusable across different parts of the application. Overall, this code provides a solid foundation for a row of movie cards in a Netflix clone application built with React.
// The Row component can also be made more customizable by allowing the parent component to pass in additional props, such as the number of columns to display or whether to show a loading spinner while the data is being fetched. This would make the component more flexible and reusable across different parts of the application. Overall, this code provides a solid foundation for a row of movie cards in a Netflix clone application built with React.

