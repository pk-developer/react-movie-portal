import NotFoundComponent from "modules/common/404";
import MovieDetailsComponent from "modules/private/movie-details";
import MoviesComponent from "modules/private/movies";
import LoginComponent from "modules/public/login";
import { Route, Routes } from "react-router-dom";
import { SCREENS } from "./route.label";

const AppRoute = (
  <Routes >
    <Route path={SCREENS.LOGIN_SCREEN} element={<LoginComponent />} />
    <Route path={SCREENS.MOVIES} element={<MoviesComponent />} />
    <Route
      path={`${SCREENS.MOVIE_DETAILS}`}
      element={<MovieDetailsComponent />}
    />
    <Route
      path="*"
      element={<NotFoundComponent />}
    />
  </Routes>
);

export default AppRoute;
