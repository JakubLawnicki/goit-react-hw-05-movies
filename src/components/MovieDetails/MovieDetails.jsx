import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const poster = `https://www.themoviedb.org/t/p/w500${details.poster_path}`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              language: 'en-US',
              api_key: 'c90cdec037818042646f6ab3cec9ea66',
            },
            headers: {
              accept: 'application/json',
            },
          }
        );
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <h2>
        {details.title} {`(${details.release_date?.slice(0, 4)})`}
      </h2>
      <p>User Score: {details.popularity?.toFixed(1)}%</p>
      <img src={poster} alt="" />
    </div>
  );
};
