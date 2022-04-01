import style from './MovieCard.module.css'
import { Link } from 'react-router-dom';



const MovieCard = ({movie}) => {

    const imageUrl = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path

    return (
        <article className={style.movieCard}>
            <Link to={"/movies/" + movie.id}>
                <img className={style.movieCardImage} src={imageUrl} alt={movie.title}/>
                <h2>{movie.title}</h2>
            </Link>
        </article>
    )
}

export default MovieCard