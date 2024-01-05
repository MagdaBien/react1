import { favourite } from '../../redux/store';
import Button from '../Button/Button';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

const Card = props => {
    const dispatch = useDispatch();

    return (
        <li className={styles.card}>
            <p>{props.title}</p>
            <Button className={clsx(styles.desactive, props.isFavorite && styles.active)} onClick={e => dispatch(favourite(props.id))}  >
                <span className={' fa fa-star-o'} />
            </Button>
        </li>
    );
};

export default Card;
