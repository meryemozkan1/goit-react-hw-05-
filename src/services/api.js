import axios from "axios";

// Görseldeki çalışan token değerinizi buraya tırnaklar arasına tam haliyle yerleştirdik
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmE2NGQ1NmU0OWVhZjZmMzY1M2RhYmRmY2MzNzI1YiIsIm5iZiI6MTc3OTM5OTI1OC42NzIsInN1YiI6IjZhMGY3YTVhNzM4ZTQ3ZTQyNDQ1OTQ4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nddTbZRjgkDLfwZ0WVJsu4U30h4Xu5E5t0yVFA7dna4";
const BASE_URL = "https://api.themoviedb.org/3";

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    accept: "application/json",
  },
});

export const fetchTrendingMovies = async () => {
  const response = await tmdbApi.get("/trending/movie/day");
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await tmdbApi.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
  );
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await tmdbApi.get(`/movie/${movieId}?language=en-US`);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await tmdbApi.get(
    `/movie/${movieId}/credits?language=en-US`,
  );
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await tmdbApi.get(
    `/movie/${movieId}/reviews?language=en-US&page=1`,
  );
  return response.data.results;
};
