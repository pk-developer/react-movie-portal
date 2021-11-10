import { apiKey } from "app.config";
import { ApiEndpoint } from "core/services/https/ApiEndpoint";
import { RestApiService } from "core/services/https/rest-api.service";
import React from "react";
import { useMovies } from "shared/hooks";
import { Header, MovieCard } from "shared/molecules";

interface MoviesComponentProps {
  history?: any;
}

const MoviesComponent = (props: MoviesComponentProps) => {
  const restAPIServices = new RestApiService();
  const { movies, setMovies } = useMovies((state: any) => state);
  console.log("hello movies", movies);

  const getMovies = (searchTerm: string) => {
    restAPIServices.invoke(ApiEndpoint.GET_MOVIES, {}, null, {
      apiKey: apiKey,
      t: searchTerm,
    });
  };
  return (
    <React.Fragment>
      <Header onSearch={getMovies} />
      {movies.length > 0 &&
        movies.map((movie: any, index: number) => <MovieCard key={index} />)}
    </React.Fragment>
  );
};

export default MoviesComponent;
