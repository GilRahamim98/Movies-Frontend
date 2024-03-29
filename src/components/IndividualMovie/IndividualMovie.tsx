import { Link } from "react-router-dom";
import { movieDTO } from "../../models/movies.model";
import Button from "../button/Button";
import customConfirm from "../../utils/CustomConfirm";
import css from "./IndividualMovie.module.css";
import axios from "axios";
import { urlMovies } from "../../endpoints";
import { useContext } from "react";
import AlertContext from "../../utils/AlertContext";
import Authorized from "../auth/Authorized";
export default function IndividualMovie(props: movieDTO) {
  const buildLink = () => `/movies/${props.id}`;
  const customAlert = useContext(AlertContext);
  function deleteMovie() {
    axios.delete(`${urlMovies}/${props.id}`).then(() => {
      customAlert();
    });
  }
  return (
    <div className={css.div}>
      <Link to={buildLink()}>
        <img src={props.poster} alt="Poster" className={css.img} />
      </Link>
      <p>
        <Link to={buildLink()}>{props.title}</Link>
      </p>
      <Authorized
        role="admin"
        authorized={
          <>
            <div>
              <Link
                style={{ marginLeft: "1rem" }}
                className="btn btn-info"
                to={`/movies/edit/${props.id}`}
              >
                ערוך סרט
              </Link>
              <Button
                onClick={() => customConfirm(() => deleteMovie())}
                className="btn btn-danger"
              >
                מחק סרט
              </Button>
            </div>
          </>
        }
      />
    </div>
  );
}
