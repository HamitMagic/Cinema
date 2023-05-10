import Ifilm from './film.model';

function Video({film}: {film: Ifilm}) {
    return (
        <div>
           видео {film.vote_average}
        </div>
    );
}

export default Video;