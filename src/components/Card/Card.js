import { favourite } from '../../redux/cardsRedux';
import Button from '../Button/Button';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { removeCard } from '../../redux/cardsRedux';

const Card = props => {
    const dispatch = useDispatch();

    return (
        <li className={styles.card}>
            <p>{props.title}</p>
            <div>
                <Button className={clsx(styles.desactive, props.isFavorite && styles.active)} onClick={e => dispatch(favourite(props.id))}  >
                    <span className={' fa fa-star-o'} />
                </Button>
                <Button className={clsx(styles.desactive)} onClick={e => dispatch(removeCard(props.id))}  >
                    <span className={' fa fa-trash'} />
                </Button>   
            </div>        
        </li>
    );
};

export default Card;
