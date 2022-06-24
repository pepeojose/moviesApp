import { Link } from "react-router-dom";
import { getMovieImage } from "../utils/fetchData";
import style from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
    const imageUrl = getMovieImage(movie.poster_path, 300);

    return (
        <article className={style.movieCard}>
            <Link to={"/movies/" + movie.id}>
                <img
                    className={style.movieCardImage}
                    src={imageUrl}
                    alt={movie.title}
                />
                <h2>{movie.title}</h2>
            </Link>
        </article>
    );
};

export default MovieCard;
