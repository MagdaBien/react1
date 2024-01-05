import PageTitle from '../../components/PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavouriteCards } from '../../redux/store';
import Card from '../Card/Card';
import styles from './Favourite.module.scss';

const Favourite = () => {

    const cards = useSelector(getFavouriteCards);

    let cardsList = "No cards…";
    if(cards.length>0) cardsList = cards.map(card => <Card key={card.id} {...card} />);

    return(
        <>
            <PageTitle>Favourite</PageTitle>
            <div className={styles.columnContainer}>
            <article className={styles.column}>
                <ul className={styles.cards}>
                   { cardsList } 
                </ul>
            </article>
            </div>
        </>
        );
};
    
export default Favourite;