import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import style from './MovieProfile.module.css'
import { getData, getMovieImage } from "../utils/fetchData"


const MovieProfile = () => {
    const API = "https://api.themoviedb.org/3"
    
    const {movieId} = useParams()
    const [movie, setMovie] = useState(null)
    
    
    useEffect(() => {
        getData("/movie/" + movieId).then(dataMovie => {
            setMovie(dataMovie)
        })
    },[movieId])
    
    if(!movie) {
        return null
    }
    
    const imageUrl = getMovieImage(movie.poster_path, 500)
    
    return (
        <div className={style.containerProfile} >
            <article className={style.cardProfile}>
                <img className={style.cardProfileImage} src={imageUrl} alt={movie.title} />
                <div className={style.cardProfileInfo} >
                    <h2><span className={style.cardProfileText}>Título:</span> {movie.title}</h2>
                    <p><span className={style.cardProfileText}>Fecha de lanzamiento:</span> {movie.release_date}</p>
                    <p><span className={style.cardProfileText}>Duración:</span> {movie.runtime}</p>
                    <p>
                        <span className={style.cardProfileText}>Genero: </span>
                        {
                            movie.genres.map(genre => genre.name).join(", ")
                        }
                    </p>
                    <p><span className={style.cardProfileText}>Descripción:</span> {movie.overview}</p>
                </div>
            </article>
        </div>
    )
}

export default MovieProfile