import {useState, useEffect} from 'react'
import {FaSearch} from "react-icons/fa"
import style from './Search.module.css'


const Search = () => {
    return (
        <form className={style.search}>
            <div className={style.searchContainer}>
                <input 
                    type="text" 
                    className={style.searchInput}
                    placeholder="Search Movies"
                />
                <button className={style.searchBtn} type="submit">
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    )
}

export default Search