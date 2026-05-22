import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrending() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getTrending();
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending today</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong.</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
