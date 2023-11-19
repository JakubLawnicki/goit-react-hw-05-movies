import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import style from './movies.module.css';
import axios from 'axios';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const query = searchParams.get('query');

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            query: `${query}`,
            language: 'en-US',
            page: 1,
            api_key: 'c90cdec037818042646f6ab3cec9ea66',
          },
          headers: {
            accept: 'application/json',
          },
        }
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  return (
    <div className={style.wrapper}>
      <form
        className={style.form}
        onSubmit={e => {
          e.preventDefault();
          fetchMovies();
        }}
      >
        <input
          className={style.searchbar}
          type="text"
          onChange={e => {
            setSearchParams({ query: e.target.value });
          }}
        />
        <button className={style.button} type="submit">
          Search
        </button>
      </form>
      <ul className={style['movie-list']}>
        {movies.map(movie => {
          const imgUrl = `https://www.themoviedb.org/t/p/w500${movie.poster_path}`;
          const movieId = movie.id;
          const title = movie.title
            ? movie.title
            : 'Ups... There is no title available.';
          return (
            <li className={style.item} key={movie.id}>
              <Link to={`${movieId}`} state={{ from: location }}>
                <p className={style.title}>{title}</p>
                <img className={style.poster} src={imgUrl} alt={movie.title} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
