import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './movies.module.css';
import axios from 'axios';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState('');

  const fetchMovies = () => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          query: `${movieName}`,
          language: 'en-US',
          page: 1,
          api_key: 'c90cdec037818042646f6ab3cec9ea66',
        },
        headers: {
          accept: 'application/json',
        },
      })
      .then(film => {
        setMovies(film.data.results);
      });
  };

  return (
    <div className={style.wrapper}>
      <form className={style.form}>
        <input
          className={style.searchbar}
          type="text"
          onChange={e => {
            setMovieName(e.target.value);
          }}
        />
        <button
          className={style.button}
          type="submit"
          onClick={e => {
            e.preventDefault();
            fetchMovies();
          }}
        >
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
              <Link to={`${movieId}`}>
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
