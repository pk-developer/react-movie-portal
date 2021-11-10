import { apiKey } from "app.config";
import { Movie } from "core/model/interfaces";
import { ApiEndpoint } from "core/services/https/ApiEndpoint";
import { RestApiService } from "core/services/https/rest-api.service";
import React from "react";
import { useMovies } from "shared/hooks";
import { Header, MovieCard } from "shared/molecules";
import {NoRecordFound} from "shared/molecules";

interface MoviesComponentProps {
  history?: any;
}

const MoviesComponent = (props: MoviesComponentProps) => {
  const restAPIServices = new RestApiService();
  const { movies, setMovies } = useMovies((state: any) => state);
  console.log("hello movies", movies);

  const getMovies = async (searchTerm: string) => {
    const result: any = await restAPIServices.invoke(
      ApiEndpoint.GET_MOVIES,
      {},
      null,
      {
        apiKey: apiKey,
        t: searchTerm,
      }
    );
    if (result.data.imdbID) {
      setMovies([
        { ...result.data, image: "http://www.omdbapi.com/src/poster.jpg" },
      ]);
    } else {
      setMovies([])
    }
    // not getting image in response also the response is always a object
  };
  return (
    <React.Fragment>
      <Header onSearch={getMovies} />
      <div style={{ padding: "20px" }}>
        {movies.length > 0 &&
          movies.map((movie: Movie, index: number) => (
            <MovieCard {...movie} key={index} />
          ))}
          {movies.length === 0 && <NoRecordFound />}
      </div>
    </React.Fragment>
  );
};

export default MoviesComponent;
