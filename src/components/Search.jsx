import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import style from "./Search.module.css";

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {
        setSearchText(search || "");
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/?search=" + searchText);
    };

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <form className={style.search} onSubmit={handleSubmit}>
            <div className={style.searchContainer}>
                <input
                    type="text"
                    className={style.searchInput}
                    placeholder="Search Movies"
                    aria-label="Search Movies"
                    value={searchText}
                    onChange={handleChange}
                />
                <button className={style.searchBtn} type="submit">
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    );
};

export default Search;
