import style from './Main.module.css';
import MoviesSelection from './MoviesSelection';

const Main = () => {
    return (
        <main className={style.main}>
            <MoviesSelection />
        </main>
    )
}

export default Main