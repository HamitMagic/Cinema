import FilmItem from './FilmItem';
import Ifilm from './film.model';
import { observer } from 'mobx-react';
import { paginationStore } from '../store/paginationStore';
import { useEffect, useState } from 'react';
import useItemsOnPage from '../hooks/useItemsOnPage';


function FilmList({films, setFilmID}: {films: Ifilm[], setFilmID: (id: number) => void}) {
    const [values, setValues] = useState(films);

    window.addEventListener('resize', () => {
        paginationStore.setSize(useItemsOnPage());
    })

    useEffect(() => {
        paginationStore.setSize(useItemsOnPage());
        setValues(films)
    },[films, paginationStore.getPage(), paginationStore.getSize()])

    return (
        <>
            {values.slice(
                paginationStore.getOffset(), paginationStore.getOffset()+paginationStore.getSize()
            ).map((film: Ifilm) => <FilmItem film={film} key={film.id} onClick={() => setFilmID(film.id)} />)}
        </>
    );
}

export default observer(FilmList);