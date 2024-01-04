import styles from './Lists.module.scss';
import { useSelector } from 'react-redux';
import { getAllLists } from '../../redux/store';
import ListItem from '../ListItem/ListItem';
import ListForm from '../ListForm/ListForm';

const Lists = () => {

    const lists = useSelector(getAllLists);

    return(
        <section className={styles.lists}>
        <h1 className={styles.heading}>Browse lists:</h1>
        { lists.map(list => <ListItem key={list.id} {...list} />) }
        <ListForm></ListForm>
        </section>
    );
  };
  export default Lists;