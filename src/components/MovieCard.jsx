import style from './MovieCard.module.css'


const MovieCard = ({movie}) => {

    const imageUrl = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path

    return (
        <article className={style.movieCard}>
            <img className={style.movieCardImage} src={imageUrl} alt={movie.title}/>
            <h2>{movie.title}</h2>
        </article>
    )
}

export default MovieCard