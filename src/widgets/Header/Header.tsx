
import { NavLink } from "react-router-dom"
import styles from './ui/Header.module.css'

export const Header = () => {

    return (
        <header className={styles.Header}>
            <NavLink to="/">Index</NavLink>
            <NavLink to="/about">About</NavLink>
        </header>
    )
}