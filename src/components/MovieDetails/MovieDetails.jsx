import { useParams } from 'react-router-dom';
import axios from 'axios';

export const MovieDetails = () => {
  const { movieId } = useParams();

  axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      params: {
        language: 'en-US',
        api_key: 'c90cdec037818042646f6ab3cec9ea66',
      },
      headers: {
        accept: 'application/json',
      },
    })
    .then(movies => {
      console.log(movies.data);
    });
};
