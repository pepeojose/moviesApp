import React, { useState, useEffect } from 'react';
import style from './MoviesSelection.module.css'
import MovieCard from './MovieCard'
import Spinner from './Spinner';
import { getData } from "../utils/fetchData"


const MoviesSelection = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setIsLoading(true)
        getData("/discover/movie").then(dataMovies => {
            setMovies(dataMovies.results)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return <Spinner />
    }

    return (
        <section className={style.moviesSelection}>
            {
                movies.map(movie => (
                    <MovieCard 
                        key={movie.id}
                        movie={movie}
                    />
                ))
            }
        </section>
    )
}

export default MoviesSelection