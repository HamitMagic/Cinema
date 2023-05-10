import Ifilm from "./film.model";

function Details({film}: {film: Ifilm}) {
    return (
        <section>
            <div>
                <p>Статус</p>
                <p>Дата выхода</p>
                <p>Продолжительность</p>
                <p>Язык оригинала</p>
                <p>Страна</p>
                <p>Бюджет</p>
            </div>
            <div>
                <p>{film.release_date ? 'Выпущено' : 'Не выпущено'} </p>
                <p>{film.release_date}</p>
                <p>Считается...</p>
                <p>{film.original_language}</p>
                <p>{film.title}</p>
                <p>Bunch of money</p>
            </div>
        </section>
    );
}

export default Details;