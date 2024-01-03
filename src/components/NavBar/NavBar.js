import styles from './NavBar.module.scss';
import Container from '../../components/Container/Container';

const NavBar = () => {
    return(
    <div className={styles.navBar}>
        <Container>
            <div className={styles.navLinks}>
            <a href="/"><span className={styles.icon + ' fa fa-tasks'} /></a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/favorite">Favourite</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            </div>
        </Container>
    </div>
    );
};

export default NavBar;