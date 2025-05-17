import '../assets/HeroBanner.css';

    function HeroBanner({ movie }) {
    return (
    <div className="hero" style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
    }}>
        <div className="hero-content">
        <h1>{movie?.title}</h1>
        <p>{movie?.overview?.substring(0, 150)}...</p>
        <div className="hero-buttons">
            <button>▶ Play</button>
            <button>ℹ More Info</button>
        </div>
        </div>
        <div className="hero-fade" />
    </div>
    );
}
export default HeroBanner;






// This code defines a React component called HeroBanner that displays a hero banner for a movie. The banner includes the movie's title, a brief overview, and two buttons: "Play" and "More Info". The background image of the banner is set to the movie's backdrop image using inline styles. The component is styled using an external CSS file (HeroBanner.css). The use of optional chaining (?.) ensures that the code does not throw an error if the movie object is undefined or if any of its properties are missing.
// The HeroBanner component can be improved by adding more features, such as a loading spinner while the movie data is being fetched, or error handling to display a message if the movie data cannot be retrieved. Additionally, the buttons can be made functional by linking them to appropriate actions, such as playing the movie or navigating to a detailed movie page. Overall, this code provides a solid foundation for a hero banner component in a Netflix clone application built with React.
// The HeroBanner component can be further enhanced by adding animations or transitions to make the banner more visually appealing. For example, a fade-in effect when the component mounts or a parallax effect when scrolling could improve the user experience. Additionally, the component could be made responsive to ensure it looks good on different screen sizes, and accessibility features could be added to improve usability for all users.