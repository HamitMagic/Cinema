import Actors from '../components/Actors';
import Details from '../components/Details';
import Video from '../components/Video';
import Ifilm from '../components/film.model';
import classes from '../styles/filmPage.module.css'
import {useState} from 'react'

function FilmPage({film}: {film: Ifilm}) {
    const background: string = `https://image.tmdb.org/t/p/w500/${film.backdrop_path}`;
    const imagePath: string = `https://image.tmdb.org/t/p/w500/${film.poster_path}`;
    const [details, setDetails] = useState<boolean>( true );
    const [video, setVideo] = useState<boolean>( false );
    const [actors, setActors] = useState<boolean>( false );

    function handleClick(str: string) {
        switch (str) {
            case 'video':
                setActors(false);
                setVideo(true);
                setDetails(false);
                break;
            case 'actors':
                setActors(true);
                setVideo(false);
                setDetails(false);
                break;
            default:
                setActors(false);
                setVideo(false);
                setDetails(true);
                break;
        }
    }

    return (
        <div className={classes.main}>
            <div className={classes.header} style={
                { backgroundImage: `url(${background})` }
            }>
                <span>
                    <img src={imagePath} height={250}/>
                </span>
                <div>
                    <h1>{film.title}</h1>
                    <p>Рейтинг: {film.vote_average}</p>
                    <p>{film.overview}</p>
                </div>
            </div>
            <div className={classes.container}>
                <span onClick={() => handleClick('details')} >Детали</span>
                <span onClick={() => handleClick('video')} >Видео</span>
                <span onClick={() => handleClick('actors')} >Актеры</span>
            </div>
            <div className={classes.description}>
                {details && <Details film={film} />}
                {video && <Video film={film} />}
                {actors && <Actors film={film} />}
            </div>
        </div>
    );
}

export default FilmPage;