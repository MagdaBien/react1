import styles from './NavBar.module.scss';
import Container from '../../components/Container/Container';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
    <div className={styles.navBar}>
        <Container>
            <div className={styles.navLinks}>
            <a href="/"><span className={styles.icon + ' fa fa-tasks'} /></a>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink>
                </li>                                
            </ul>
            </div>
        </Container>
    </div>
    );
};

export default NavBar;