import styles from './SearchForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { search } from '../../redux/searchItemRedux';
import { getSearchItem } from '../../redux/searchItemRedux';

const SearchForm = () => {
    const searchStart = useSelector(getSearchItem);    
    const [searchItem, setsearchItem] = useState(searchStart);
    //console.log("search z magazynu: ", searchStart, "| search ze stanu (z wyszukiwarki): ", searchItem);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(search(searchItem));
     }; 

    return (
        <form  onSubmit={handleSubmit}  className={styles.searchForm}>
            <TextInput value={searchItem} onChange={e => setsearchItem(e.target.value)}  placeholder="Search..." />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;