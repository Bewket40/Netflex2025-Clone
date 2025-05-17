import '../assets/MovieCard.css';
    function MovieCard({ movie, onClick }) {
    return (
    <div className="movie-card" onClick={() => onClick(movie)}>
        <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title || movie.name}
        className="movie-image"
        />
        <div className="movie-overlay">
        <span className="movie-title">{movie.title || movie.name}</span>
        </div>
    </div>
    );
}
export default MovieCard;





// This code defines a React component called MovieCard that displays a movie card with an image and title. When the card is clicked, it triggers a callback function (onClick) with the movie object as an argument. The component uses CSS for styling and fetches the movie poster image from the TMDB API using the movie's poster_path property. The title is displayed as an overlay on top of the image.
// The component is styled using an external CSS file (MovieCard.css).
// The MovieCard component is used in the Row component to display a list of movies in a horizontal row format. When a movie card is clicked, it opens a modal to show the trailer for that movie.
