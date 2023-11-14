import { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div>
      <form action="">
        <input
          type="text"
          onChange={e => {
            setMovieName(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            fetchMovies();
          }}
        >
          Search
        </button>
      </form>
      <ul
        style={{
          display: 'grid',
          maxWidth: 'calc(100vw - 48px)',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gridGap: 16,
          marginTop: 30,
          marginBottom: 0,
          padding: 0,
          listStyle: 'none',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {movies.map(movie => {
          const imgUrl = `https://www.themoviedb.org/t/p/w500${movie.poster_path}`;
          const movieId = movie.id;
          return (
            <li key={movie.id}>
              <Link to={`${movieId}`}>
                <p
                  style={{
                    fontSize: 14,
                  }}
                >
                  {movie.title}
                </p>
                <img
                  style={{
                    width: 200,
                    height: 300,
                  }}
                  src={imgUrl}
                  alt={movie.title}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
