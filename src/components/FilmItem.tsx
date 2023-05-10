import {Link} from 'react-router-dom'
import Ifilm from "./film.model";
import classes from '../styles/film.module.css'

function FilmItem(props: {film: Ifilm, onClick: () => void}) {
    const imagePath: string = props.film.poster_path || props.film.backdrop_path;

    return (
        <div className={classes.film_container}>
            <Link to="/film">
                <img src={`https://image.tmdb.org/t/p/w500/${imagePath}`}/>
            </Link>
            <div className={classes.details}>
                <div className={classes.details_header}>
                    <span>Рейтинг: {props.film.vote_average}</span>
                    <div>
                        <img src='src/assets/images/star.svg' alt="избранное" />
                        <img src='src/assets/images/bookmark.svg' alt="смотреть позже" />
                    </div>
                </div>
                <div className={classes.details_title}>
                    <div>год: {props.film.release_date}</div>

                    {props.film.title}
                </div>
                <Link to='/film' className={classes.details_link} onClick={props.onClick}>
                    Подробнее
                </Link>
            </div>
        </div>
    );
}

export default FilmItem;