import { filmStore } from '../../../store/filmsStore';
import Ifilm, { CONSTS } from '../../film.model';
import classes from './select.module.css';
import { observer } from 'mobx-react';


interface Iprops{
    value: number[] | string[],
    name: string;
    onSelect: (film: Ifilm[]) => void;
}

function MySelect(props: Iprops) {

    function formHandler(value: string){
        let films;
        if (CONSTS.includes(value)) {
            films = filmStore.sortFilms(value);
        } else films = filmStore.filterByYear(value);
        props.onSelect(films)
    }

    return (
        <form className={classes.form}>
            <select onChange={(e) => {
                formHandler(e.target.value);
            }} name={props.name}>
                {props.value.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
        </form>
    );
}

export default observer(MySelect);