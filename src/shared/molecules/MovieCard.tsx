import { Movie } from "core/model/interfaces";
import { Link } from "react-router-dom";
import { SCREENS } from "routes/route.label";
import { React } from "shared/shared-import";

const MovieCard = (props: Movie) => {
  return (
    <div className="card" style={styles.card}>
      <img src={props.image} className="card-img-top" alt="..."  style={styles.image}/>
      <div className="card-body">
        <h5 className="card-title">{props.Title}</h5>
        <p className="card-text">{props.Plot}</p>
        <Link to={`${SCREENS.MOVIE_DETAILS}?id=${props.imdbID}`} className="btn btn-primary">Details</Link>
      </div>
    </div>
  );
};

export default MovieCard;

const styles = {
  card: {
    maxWidth: '300px'
  },
  image: {
    width: '100%'
  }
}
