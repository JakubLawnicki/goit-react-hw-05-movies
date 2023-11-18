import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState({});

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
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
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <ul>
      {cast?.map(actor => {
        const photo = `https://www.themoviedb.org/t/p/w500${actor.profile_path}`;
        return (
          <li>
            <img src={photo} alt={actor.name} />
            <p>{actor.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
