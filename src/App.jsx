import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import style from "./App.module.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MovieProfile from "./pages/MovieProfile";
import "./styles/index.css";

function App() {
    return (
        <Router>
            <div className={style.app}>
                <Header />
                <Routes>
                    <Route
                        exact
                        path="/movies/:movieId"
                        element={<MovieProfile />}
                    />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
