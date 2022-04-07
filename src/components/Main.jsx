import style from './Main.module.css'
import MoviesSelection from './MoviesSelection'
import Search from './Search'

const Main = () => {
    return (
        <main className={style.main}>
            <Search />
            <MoviesSelection />
        </main>
    )
}

export default Main