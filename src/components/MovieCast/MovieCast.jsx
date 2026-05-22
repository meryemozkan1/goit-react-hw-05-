import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  if (loading) return <p>Loading cast...</p>;
  if (error) return <p>Error loading cast.</p>;
  if (cast.length === 0)
    return (
      <p className={css.noInfo}>
        We don't have any cast information for this movie.
      </p>
    );

  const defaultImg =
    "https://dl-media.viber.com/pg_viewer/nav/65772290a5303a12c0cc11a6/3/W_400.jpg";

  return (
    <ul className={css.list}>
      {cast.map((actor) => (
        <li key={actor.id} className={css.item}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : defaultImg
            }
            alt={actor.name}
            className={css.avatar}
          />
          <div className={css.info}>
            <p className={css.name}>{actor.name}</p>
            <p className={css.character}>Character: {actor.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
