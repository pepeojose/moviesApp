import { useQuery } from "../hooks/useQuery";
import style from "./Main.module.css";
import MoviesSelection from "./MoviesSelection";
import Search from "./Search";

const Main = () => {
    const query = useQuery();
    const search = query.get("search");

    return (
        <main className={style.main}>
            <Search />
            <MoviesSelection key={search} search={search} />
        </main>
    );
};

export default Main;
