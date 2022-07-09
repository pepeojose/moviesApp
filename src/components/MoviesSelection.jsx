import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getData } from "../utils/fetchData";
import EmptyMovies from "./EmptyMovies";
import MovieCard from "./MovieCard";
import style from "./MoviesSelection.module.css";
import Spinner from "./Spinner";

const MoviesSelection = ({ search }) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search
            ? "/search/movie?query=" + search + "&page=" + page
            : "/trending/movie/week?page=" + page;
        getData(searchUrl).then((dataMovies) => {
            setMovies((preMovies) => preMovies.concat(dataMovies.results));
            setHasMore(dataMovies.page < dataMovies.total_pages);
            setIsLoading(false);
        });
    }, [search, page]);

    if (!isLoading && movies.length === 0) {
        return <EmptyMovies />;
    }

    return (
        <InfiniteScroll
            dataLength={movies.length}
            hasMore={hasMore}
            next={() => setPage((prevPage) => prevPage + 1)}
            loader={<Spinner />}
        >
            <section className={style.moviesSelection}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </section>
        </InfiniteScroll>
    );
};

export default MoviesSelection;
