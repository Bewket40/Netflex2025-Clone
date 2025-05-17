import { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/TrailerModal.css';
// This component fetches and displays a movie trailer in a modal when the user clicks on a movie card.

    function TrailerModal({ movie, apiKey, onClose }) {
    const [videoKey, setVideoKey] = useState('');

    useEffect(() => {
    async function fetchTrailer() {
        try {
        const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}`
        );
        const trailers = res.data.results.filter(
            (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
        );
        if (trailers.length > 0) {
            setVideoKey(trailers[0].key);
        }
        } catch (err) {
        console.error('Error fetching trailer:', err);
        }
    }

    fetchTrailer();
    }, [movie.id, apiKey]);

    return (
    <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>
        {videoKey ? (
            <iframe
            title="Trailer"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            />
        ) : (
            <p className="no-trailer">No trailer available.</p>
        )}
        </div>
    </div>
    );
}

export default TrailerModal;
// This code defines a React component called TrailerModal that displays a modal with a movie trailer when the user clicks on a movie card. The component fetches the trailer from the TMDB API using the useEffect hook and stores the video key in state using the useState hook. The modal can be closed by clicking outside of it or on the close button. The component is styled using an external CSS file (TrailerModal.css).    