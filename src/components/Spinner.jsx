import { FaSpinner } from "react-icons/fa";
import style from "./Spinner.module.css";

const Spinner = () => {
    return (
        <div>
            <FaSpinner className={style.spinner} size={60} />
        </div>
    );
};

export default Spinner;
