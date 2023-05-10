import { Link } from 'react-router-dom';
import classes from '../../../styles/filters.module.css'
import { paginationStore } from '../../../store/paginationStore'
import { observer } from 'mobx-react';

function Pagination() {

    function goToPage(pageNumber: number) {
        if (pageNumber < 1 || pageNumber > paginationStore.getTotal()) {
            return;
        }
        paginationStore.getPage() > pageNumber 
            ? paginationStore.setOffset(paginationStore.getOffset() - paginationStore.getSize())
            : paginationStore.setOffset(paginationStore.getOffset() + paginationStore.getSize())
        paginationStore.setPage(pageNumber);
        
    }

    

    
    function handleClick(direction: string) {
        switch (direction) {
            case 'next':
                goToPage(paginationStore.getPage()+1);
                break;
            case 'prev':
                goToPage(paginationStore.getPage()-1)
                break;
            default:
                goToPage(paginationStore.getPage());
                break;
        }
    }
    return (
        <>
            <div className={classes.special_btn}>
                <Link to='#' className={paginationStore.getPage() === 1 ? classes.inactive : classes.active} onClick={() => handleClick('prev')}>Назад</Link>
                <Link to='#' className={paginationStore.getPage() === paginationStore.getTotal() ? classes.inactive : classes.active} onClick={() => handleClick('next')}>Вперед</Link>
            </div>
            <p>{paginationStore.getPage()} of {paginationStore.getTotal()}</p>
        </>
    );
}

export default observer(Pagination);