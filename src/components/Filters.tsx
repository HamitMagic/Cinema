import Mybtn from "./UI/buttons/Mybtn";
import classes from '../styles/filters.module.css'
import MySelect from "./UI/select/MySelect";
import genre from '../assets/genres.json';
import CheckBox from "./UI/checkBox/CheckBox";
import Pagination from "./UI/pagination/Pagination";
import { CONSTS, years } from "./film.model";
import { useEffect, useState } from "react";
import Ifilm from "./film.model";
import { filmStore } from "../store/filmsStore";
import { observer } from "mobx-react";
import { paginationStore } from "../store/paginationStore";

export interface Igenre {
    "id": number,
    "name": string,
}

function Filters(props: {setFilms: (films: Ifilm[]) => void}) {
    const genres: Igenre[] = genre as Igenre[];
    const [films, setFilms] = useState<Ifilm[]>(filmStore.films);
    

    useEffect(() => {
        paginationStore.updatePages(films.length);
        props.setFilms(films);
    },[films])

    return (
        <div className={classes.filters}>
            <h4>Фильтры:</h4>
            <Mybtn callback={props.setFilms} text='Сбросить все фильтры' link='#' id={classes.special_btn}/>
            <span className={classes.sortBy}>Сортировать по:</span>
            <MySelect onSelect={(films: Ifilm[]) => setFilms(films)} name="SortBy" value={CONSTS} />
            <span className={classes.sortBy}>Год релиза:</span>
            <MySelect onSelect={(films: Ifilm[]) => setFilms(films)} name="SortByYear" value={years} />
            <form className={classes.filters_checkBox} >
                {genres.map((genre) => <CheckBox onSelect={(films: Ifilm[]) => setFilms(films)} key={genre.id} genre={genre}/>)}
            </form>
            <Pagination />
        </div>
    );
}

export default observer(Filters);