import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description}));
        setTitle('');
        setDescription('');
     };    

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <div>
                <label className={styles.inputLabel}>Title:</label>
                <TextInput value={title} onChange={e => setTitle(e.target.value)} />                
            </div>
            <div>
                <label className={styles.inputLabel}>Despription:</label>
                <TextInput value={description} onChange={e => setDescription(e.target.value)} /> 
            </div>
            <div className={styles.buttonField}>
                <Button>Add list</Button>
            </div>
        </form>
	);

};

export default ListForm;