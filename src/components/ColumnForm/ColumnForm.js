import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = (props) => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const listId = props.listId;
        dispatch(addColumn({ title, icon, listId }));
        setTitle('');
        setIcon('');
     };    

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <div>
                <label className={styles.inputLabel}>Title:</label>
                <TextInput value={title} onChange={e => setTitle(e.target.value)} />                
            </div>
            <div>
                <label className={styles.inputLabel}>Icon:</label>
                <TextInput value={icon} onChange={e => setIcon(e.target.value)} /> 
            </div>
            <div className={styles.buttonField}>
                <Button>Add column</Button>
            </div>
        </form>
	);

};

export default ColumnForm;