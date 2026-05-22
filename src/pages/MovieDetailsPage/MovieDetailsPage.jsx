/* eslint-disable react-hooks/refs */
import { useEffect, useState, useRef } from "react";
import {
  useParams,
  Link,
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    async function getDetails() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getDetails();
  }, [movieId]);

  if (loading) return <p>Loading details...</p>;
  if (error) return <p>Error loading movie details.</p>;
  if (!movie) return null;

  const defaultImg =
    "https://dl-media.viber.com/pg_viewer/nav/65772290a5303a12c0cc11a6/3/W_400.jpg";

  return (
    <div className={css.container}>
      <Link to={backLinkRef.current} className={css.backLink}>
        Go back
      </Link>

      <div className={css.movieInfo}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultImg
          }
          alt={movie.title}
          className={css.poster}
        />
        <div>
          <h2>
            {movie.title} ({movie.release_date?.slice(0, 4)})
          </h2>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres?.map((g) => g.name).join(", ")}</p>
        </div>
      </div>

      <hr />
      <h3>Additional information</h3>
      <ul className={css.navTabs}>
        <li>
          <NavLink
            to="cast"
            className={({ isActive }) => (isActive ? css.active : css.link)}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews"
            className={({ isActive }) => (isActive ? css.active : css.link)}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
