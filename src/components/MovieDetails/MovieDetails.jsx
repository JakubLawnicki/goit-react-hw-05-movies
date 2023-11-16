import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import style from './movieDetails.module.css';
import { useState, useEffect } from 'react';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: red;
  }
`;

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
    <div className={style.wrapper}>
      <img className={style.poster} src={poster} alt={details.title} />
      <div className={style.info}>
        <h2 className={style.title}>
          {details.title} {`(${details.release_date?.slice(0, 4)})`}
        </h2>
        <p className={style.popularity}>
          User Score: {details.popularity?.toFixed(1)}%
        </p>
        <h3 className={style.subtitle}>Overview</h3>
        <p className={style.overview}>{details.overview}</p>
        <h3 className={style.subtitle}>Genres</h3>
        <p className={style.genres}>
          {details.genres?.map(genre => genre.name).join(', ')}
        </p>
        <div className={style.separator}></div>
        <h3 className={style.subtitle}>Additional information</h3>
        <div className={style.links}>
          <StyledLink to="/movies/:movieId/cast">Cast</StyledLink>
          <StyledLink to="/movies/:movieId/reviews">Reviews</StyledLink>
        </div>
      </div>
    </div>
  );
};
