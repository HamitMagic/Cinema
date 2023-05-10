import Ifilm from './film.model';

function Actors({film}: {film: Ifilm}) {
    return (
        <div>
            актеры {film.release_date}
        </div>
    );
}

export default Actors;