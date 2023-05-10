import { makeAutoObservable, configure } from "mobx";
import { filmStore } from "./filmsStore";
import useItemsOnPage from "../hooks/useItemsOnPage";

configure({enforceActions: 'observed'});

class Store {
    page: number = 1;
    size: number = useItemsOnPage();
    total: number = Math.ceil(filmStore.getFilms().length / this.size) || 1;
    offset: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    updatePages(num: number) {
        this.total = Math.ceil(num/this.size) || 1;
        return this.total;
    }

    getTotal() {
        return this.total;
    }

    getOffset() {
        return this.offset;
    }

    getSize(){
        return this.size;
    }

    getPage() {
        return this.page;
    }

    setSize(size: number) {
        this.size = size;
    }

    setPage(page: number) {
        this.page = page;
    }

    setTotal(total: number) {
        this.total = total;
    }

    setOffset(offset: number) {
        this.offset = offset;
    }
}

export const paginationStore = new Store();