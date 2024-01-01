import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const columnId = props.columnId;
        dispatch({ type: 'ADD_CARD', payload: { columnId, title} });        
        setTitle('');
    }

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <div>
                <TextInput value={title} onChange={e => setTitle(e.target.value)} /> 
            </div>
            <div className={styles.buttonField}>
                <Button>Add card</Button>
            </div>
        </form>
	);

};

export default CardForm;
