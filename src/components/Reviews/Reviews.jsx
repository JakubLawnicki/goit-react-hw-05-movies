import axios from 'axios';
import style from './reviews.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
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
        setReviews(response.data.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      <div className={style.separator}></div>
      <ul className={style.reviews}>
        {reviews?.map(review => {
          return (
            <li className={style.item}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
