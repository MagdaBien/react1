import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {
    const [titleValue, setTitleValue] = useState('');
    const [iconValue, setIconValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ columnTitle: titleValue, icon: iconValue });
        setTitleValue('');
        setIconValue('');
    }

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <div>
                <label className={styles.inputLabel}>Title:</label>
                <TextInput value={titleValue} onChange={e => setTitleValue(e.target.value)} />                
            </div>
            <div>
                <label className={styles.inputLabel}>Icon:</label>
                <TextInput value={iconValue} onChange={e => setIconValue(e.target.value)} /> 
            </div>
            <div className={styles.buttonField}>
                <Button>Add column</Button>
            </div>
        </form>
	);

};

export default ColumnForm;