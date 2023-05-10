import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import FilmPage from './pages/FilmPage'
import { filmStore } from './store/filmsStore'
import {useState} from 'react'

function App() {
  const [filmID, setFilmID] = useState<number>(0);

  return (
    <BrowserRouter>
      <Header home='/home' login='/login' />
      <Routes>
        <Route path='/home' element={<Home setFilmID={(id: number) => setFilmID(id)} />} />
        {filmID && <Route path='/film' element={<FilmPage film={filmStore.getFilm(filmID)} />} />}
        <Route path='*' element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
