import { Link } from 'react-router-dom';
import styles from './ListItem.module.scss';

const ListItem = (props) => {
const url = "/list/" + props.id;
        return(
        <Link key={props.id} to={url} className={styles.listLink}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </Link>
    );
  };
  export default ListItem;