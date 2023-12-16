import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const CardForm = props => {
    const [titleValue, setTitleValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ cardTitle: titleValue }, props.columnId);
        setTitleValue('');
    }

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <div>
                <TextInput value={titleValue} onChange={e => setTitleValue(e.target.value)} /> 
            </div>
            <div className={styles.buttonField}>
                <Button>Add card</Button>
            </div>
        </form>
	);

};

export default CardForm;
