# GoIT React Homework #5 - Movie Search Application

This project is the fifth homework assignment within the GoIT React Developer program. It builds a feature-rich Movie Search Single Page Application (SPA) utilizing **React Router (v6+)**, **TMDB REST API**, **Axios**, code splitting with `React.lazy` and `Suspense`, nested routing, and `useSearchParams`.

## 🚀 Live Demo
- [View Live Application on Vercel](https://goit-react-hw-05-alpha-khaki.vercel.app/)

## 🛠️ Components & Features Included
1. **Navigation (`<Navigation>`):** Header navigation bar featuring `NavLink` elements linking to Home (`/`) and Movies (`/movies`).
2. **HomePage (`<HomePage>`):** Renders a grid of today's trending movies fetched from the TMDB API.
3. **MoviesPage (`<MoviesPage>`):** Provides a keyword-based movie search input synchronized with URL query parameters via `useSearchParams`.
4. **MovieDetailsPage (`<MovieDetailsPage>`):** Displays comprehensive movie information (posters, genres, user score, overview) with nested routes for **Cast** (`<MovieCast>`) and **Reviews** (`<MovieReviews>`), along with smart `useRef` back-navigation state retention.
5. **NotFoundPage (`<NotFoundPage>`):** Fallback 404 error page redirecting users safely to the home screen.
6. **Performance Optimization:** Asynchronous component loading implemented via `React.lazy` and `Suspense`.

## 📂 Project Structure
- `src/pages/HomePage/` — HomePage component & CSS module
- `src/pages/MoviesPage/` — MoviesPage component & CSS module
- `src/pages/MovieDetailsPage/` — MovieDetailsPage component & CSS module
- `src/pages/NotFoundPage/` — NotFoundPage component & CSS module
- `src/components/Navigation/` — Navigation component & CSS module
- `src/components/MovieList/` — MovieList component & CSS module
- `src/components/MovieCast/` — MovieCast component & CSS module
- `src/components/MovieReviews/` — MovieReviews component & CSS module
- `src/App.jsx` — Root component managing routing, lazy loading, and suspense boundaries

## 🛠️ Technologies & Tools Used
- **React (v18+):** Functional components, hooks (`useState`, `useEffect`, `useRef`, `useParams`, `useLocation`, `useSearchParams`), `React.lazy`, and `Suspense`.
- **Routing:** React Router DOM.
- **HTTP Client:** Axios.
- **Bundler:** Vite.
- **Styling:** CSS Modules.
- **Deployment:** Vercel.