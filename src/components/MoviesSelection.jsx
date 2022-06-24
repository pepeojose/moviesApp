import React, { useState, useEffect } from 'react'
import style from './MoviesSelection.module.css'
import MovieCard from './MovieCard'
import Spinner from './Spinner'
import { getData } from "../utils/fetchData"
import { useQuery } from '../hooks/useQuery'


const MoviesSelection = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const query = useQuery()
    const search = query.get("search")

    useEffect(() => {
        setIsLoading(true)
        const searchUrl = search 
            ? "/search/movie?query=" + search
            : "/trending/movie/week"
        getData(searchUrl).then(dataMovies => {
            setMovies(dataMovies.results)
            setIsLoading(false)
        })
    }, [search])

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