import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Backend is running...');
});

app.get('/api/tmdb-key', (req, res) => {
    res.json({ key: process.env.TMDB_API_KEY });
});

const PORT = process.env.PORT || 5008;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// This code sets up a simple Express server that serves the TMDB API key as a JSON response when the `/api/tmdb-key` endpoint is accessed. The server uses the dotenv package to load environment variables from a `.env` file, allowing for secure storage of sensitive information like API keys. The cors package is used to enable Cross-Origin Resource Sharing, allowing requests from different origins.
// The server listens on a specified port (defaulting to 5000) and responds to GET requests at the `/api/tmdb-key` endpoint with the TMDB API key. This setup is useful for a Netflix clone application that requires access to the TMDB API for fetching movie data.
// This code sets up a simple Express server that serves the TMDB API key as a JSON response. It uses dotenv to load environment variables from a .env file, and cors to enable cross-origin resource sharing. The server listens on a specified port (defaulting to 5000) and responds to GET requests at the /api/tmdb-key endpoint with the TMDB API key.
// The server can be further enhanced by adding more endpoints to serve additional data, such as popular movies, TV shows, and user authentication. This will allow for a more comprehensive backend for the Netflix clone application.
