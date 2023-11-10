import axios from 'axios';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day`, {
        params: {
          language: 'en-US',
          api_key: 'c90cdec037818042646f6ab3cec9ea66',
        },
        headers: {
          accept: 'application/json',
        },
      })
      .then(movies => {
        setPopular(movies.data.results);
      });
  }, []);

  return (
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
      {popular.map(movie => {
        const imgUrl = `https://www.themoviedb.org/t/p/w500${movie.poster_path}`;
        return (
          <li key={movie.id}>
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
          </li>
        );
      })}
    </ul>
  );
};
