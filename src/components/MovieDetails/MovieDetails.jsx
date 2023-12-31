import {
  useParams,
  NavLink,
  Outlet,
  Link,
  useLocation,
} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import style from './movieDetails.module.css';
import { useState, useEffect } from 'react';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 18px;

  &.active {
    color: red;
  }

  &:hover {
    color: red;
  }
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const location = useLocation();
  const poster = `https://www.themoviedb.org/t/p/w500${details.poster_path}`;
  const goBack = location.state?.from ?? '/movies';

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

  if (!details.title) {
    return <p>Ups... There are no details available.</p>;
  }

  return (
    <div className={style.wrapper}>
      <div className={style.details}>
        <img className={style.poster} src={poster} alt={details.title} />
        <div className={style.info}>
          <button className={style.button} type="button">
            <Link to={goBack}>&#x3c; Go back</Link>
          </button>
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
            <StyledLink to="cast">Cast</StyledLink>
            <StyledLink to="reviews">Reviews</StyledLink>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
