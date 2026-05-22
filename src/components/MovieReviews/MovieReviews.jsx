import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getReviews() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>Error loading reviews.</p>;

  if (reviews.length === 0) {
    return (
      <p className={css.noInfo}>We don't have any reviews for this movie.</p>
    );
  }

  return (
    <ul className={css.list}>
      {reviews.map((review) => (
        <li key={review.id} className={css.item}>
          <h4 className={css.author}>Author: {review.author}</h4>
          <p className={css.content}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
