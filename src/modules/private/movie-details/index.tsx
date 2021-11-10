import { apiKey } from "app.config";
import { ApiEndpoint } from "core/services/https/ApiEndpoint";
import { RestApiService } from "core/services/https/rest-api.service";
import { React } from "shared/shared-import";
import Toast from "core/services/toaster.services";
import { SERVER_ERROR } from "core/Strings";
import { useQuery } from "shared/hooks";

interface MovieDetailsComponentProps {
  history?: any;
}

const MovieDetailsComponent = (props: MovieDetailsComponentProps) => {
  const restAPIServices = new RestApiService();
  const query: any = useQuery();
  const [loading, setLoading] = React.useState(true);
  const [movieDetails, setMovieDetails] = React.useState<any>(null);
  const [movieKeys, setMovieKeys] = React.useState<string[]>([]);
  console.log("hello movies", query.get("id"));

  React.useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    try {
      const result: any = await restAPIServices.invoke(
        ApiEndpoint.GET_MOVIES,
        {},
        null,
        {
          apiKey: apiKey,
          i: query.get("id"),
        }
      );
      if (result.data.imdbID) {
        debugger;
        const data = {
          ...result.data,
          image: "http://www.omdbapi.com/src/poster.jpg",
        };
        const keys = Object.keys(data);
        setMovieDetails(data);
        setMovieKeys(keys);
      } else {
        setMovieDetails(null);
      }
    } catch (error) {
      Toast.error(SERVER_ERROR);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={{ padding: "25px" }}>
      <React.Fragment>{loading && <p>Loading....</p>}</React.Fragment>
      <img style={{ marginBottom: "20px" }} src={movieDetails["image"]} />
      <div style={{ flexDirection: "row" }}>
        {!loading &&
          movieKeys.length > 0 &&
          movieKeys.map((keyName: string, index: number) => (
            <React.Fragment>
              <p
                style={{ display: "inline-block", marginRight: "25px" }}
                key={`movie_details_${index}`}
              >
                <b>{keyName}</b> : {movieDetails[keyName].toString()}
              </p>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default MovieDetailsComponent;
