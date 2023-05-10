import { Link } from 'react-router-dom'

import classes from '../styles/header.module.css'

interface Links{
    home: string,
    login: string,
}
function Header(props: Links) {
    return (
        <header className={classes.header}>
            <Link to={props.home}>Home</Link>
            <Link to={props.login} className={classes.buttom}>Login</Link>
        </header>
    );
}

export default Header;