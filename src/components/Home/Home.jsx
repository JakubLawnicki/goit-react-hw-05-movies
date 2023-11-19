import axios from 'axios';
import style from './home.module.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [popular, setPopular] = useState([]);
  const location = useLocation();

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
    <ul className={style['popular-list']}>
      {popular.map(movie => {
        const imgUrl = `https://www.themoviedb.org/t/p/w500${movie.poster_path}`;
        const movieId = movie.id;
        const title = movie.title
          ? movie.title
          : 'Ups... There is no title available.';
        return (
          <li className={style.item} key={movie.id}>
            <Link to={`/movies/${movieId}`} state={{ from: location }}>
              <p className={style.title}>{title}</p>
              <img className={style.poster} src={imgUrl} alt={movie.title} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
