import styles from './SearchForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { search } from '../../redux/store';

const SearchForm = () => {
    const [searchItem, setsearchItem] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(search(searchItem));
     }; 

    return (
        <form  onSubmit={handleSubmit}  className={styles.searchForm}>
            <TextInput onChange={e => setsearchItem(e.target.value)} placeholder="Search…" />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;