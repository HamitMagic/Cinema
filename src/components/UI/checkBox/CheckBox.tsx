import { Igenre } from "../../Filters";
import { filmStore } from "../../../store/filmsStore";
import Ifilm from "../../film.model";

function CheckBox(props: {genre: Igenre,  onSelect: (film: Ifilm[]) => void;}) {

    function handleCheckBox(el: HTMLElement) {
        console.log(11111111111, el)
        const id = Number(el.id);
        props.onSelect(filmStore.setGenrs(id))
    }

    return (
        <div>
            <input onClick={(e) => handleCheckBox(e.target as HTMLElement)} type="checkbox" id={props.genre.id.toString()} name={props.genre.name} />
            <label >{props.genre.name}</label>
        </div>
    );
}

export default CheckBox;