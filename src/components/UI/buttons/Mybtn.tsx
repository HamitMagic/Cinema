import { Link } from 'react-router-dom'
import classes from './buttons.module.css'
import { filmStore } from '../../../store/filmsStore';
import Ifilm from '../../film.model';

interface BtnProps {
    text: string,
    link: string,
    id?: string,
    callback: (films: Ifilm[]) => void;
}
function Mybtn(props: BtnProps) {

    
    return (
        <Link to={props.link} className={classes.button} id={props.id} onClick={() => props.callback(filmStore.getAllFilms())}>
            {props.text}
        </Link>
    );
}

export default Mybtn;