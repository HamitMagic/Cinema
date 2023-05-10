import { makeAutoObservable, configure } from "mobx";
import Ifilm, { CONSTS } from "../components/film.model";
import FilmList from '../assets/allFilms.json';

configure({enforceActions: 'observed'});


class Films {
    films: Ifilm[] = FilmList as Ifilm[];
    genrIDs: number[] = [];
    filteredFilms: Ifilm[] = []

    constructor() {
        makeAutoObservable(this);
    }

    setGenrs(id: number) {
        if (this.genrIDs.includes(id)) this.genrIDs = this.genrIDs.filter((genrID) => id !== genrID);
        else this.genrIDs.push(id);

        if (this.genrIDs.length === 0) return this.films;
        else return this.getGenrIDs().map((id) => this.getFilms().filter((film) => film.genre_ids.includes(id))).flat();
    }

    
    getGenrIDs() {
        return this.genrIDs;
    }

    setFilms(films: Ifilm[]) {
        this.films = films;
    }

    getFilm(id: number) {
        return this.getAllFilms().find((film) => film.id === id) as Ifilm;
    }

    filterByYear(year: string) {
        console.log(year)
        this.films = (FilmList as Ifilm[]).filter((film) => film.release_date.startsWith(year));
        return this.films;
        // return years.map((year) => this.films.filter(film => film.release_date.startsWith(year))).flat()
    }

    sortFilms(condition: string = '') {
        CONSTS.forEach(value => {
            if (condition === value) {
                if (condition.includes('Популярные')){
                    if (condition.includes('возрастанию')) return this.films.sort((a,b) =>a.popularity - b.popularity);
                    return  this.films.sort((a,b) => a.popularity - b.popularity).reverse();
                }
                else {
                    if (condition.includes('возрастанию')) return  this.films.sort((a,b) =>a.vote_average - b.vote_average);
                    return  this.films.sort((a,b) => a.vote_average - b.vote_average).reverse();
                }
            }
        });
        return this.films as Ifilm[];
    }

    getFilms() {
        return this.films as Ifilm[];
    }

    getAllFilms() {
        console.log('allFilms got')
        this.films = FilmList as Ifilm[]
        return this.films;
    }
}

export const filmStore = new Films();