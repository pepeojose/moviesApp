import style from './MovieProfile.module.css'
import movie from './movie.json'

const MovieProfile = () => {
    const API = "https://api.themoviedb.org/3"


    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path
    return (
        <div className={style.containerDetails} >
            <article className={style.cardDetails}>
                <img className={style.cardDetailsImage} src={imageUrl} alt={movie.title} />
                <div className={style.cardDetailsInfo} >
                    <h2><span className={style.cardDetailsText}>Título:</span> {movie.title}</h2>
                    <p><span className={style.cardDetailsText}>Fecha de lanzamiento:</span> {movie.release_date}</p>
                    <p><span className={style.cardDetailsText}>Duración:</span> {movie.runtime}</p>
                    <p>
                        <span className={style.cardDetailsText}>Genero: </span>
                        {
                            movie.genres.map(genre => genre.name).join(", ")
                        }
                    </p>
                    <p><span className={style.cardDetailsText}>Descripción:</span> {movie.overview}</p>
                </div>
            </article>
        </div>
    )
}

export default MovieProfile