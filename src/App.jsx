
import './styles/index.css'
import style from './App.module.css'
import Header from './components/Header'
import MovieProfile from './pages/MovieProfile'
import HomePage from './pages/HomePage'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {

  return (
    <Router>
      <div className={style.app}>
        <Header />
        <Routes>
          <Route  exact path="/movies/:movieId" element={<MovieProfile />}/>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
