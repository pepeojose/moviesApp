import React from 'react'
import style from './MoviesSelection.module.css'
import movies from '../movies.json'
import MovieCard from './MovieCard'

const MoviesSelection = () => {
    return (
        <section className={style.moviesSelection}>
            {
                movies.map(movie => 
                    <MovieCard 
                        key={movie.id}
                        movie={movie}
                    />
                )
            }
        </section>
    )
}

export default MoviesSelection