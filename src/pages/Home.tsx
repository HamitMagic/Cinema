import {useState} from 'react';
import FilmList from '../components/FilmList';
import Filters from '../components/Filters';
import classes from '../styles/home.module.css';
import { filmStore } from '../store/filmsStore';
import Ifilm from '../components/film.model';

function Home(props: {setFilmID: (id: number) => void}) {
    const [films, setFilms] = useState<Ifilm[]>(filmStore.getAllFilms());

    return (
        <div className={classes.main_container}>
            <Filters setFilms={(films: Ifilm[]) => setFilms(films)} />
            <div className={classes.container}>
                <FilmList films={films} setFilmID={(id: number) => props.setFilmID(id)} />
            </div>
        </div>
    );
}

export default Home;