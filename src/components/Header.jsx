import style from './Header.module.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className={style.header}>
            <Link to="/">
                <h1 className={style.mainTitle}>Video Movies</h1>
            </Link>
        </header>
    )
}

export default Header