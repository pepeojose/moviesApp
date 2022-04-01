
import './styles/index.css'
import style from './App.module.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  return (
    <div className={style.app}>
      <Header />
      <Main />
    </div>
  )
}

export default App