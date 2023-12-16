import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useState } from 'react';
import shortid from 'shortid';

const List = () => {

  const [columns, setColumns] = useState([
      { 
        id: 1, 
        columnTitle: 'Books', 
        icon: 'book',
        cards: [
          { id: 1, cardTitle: 'This is Going to Hurt' },
          { id: 2, cardTitle: 'Interpreter of Maladies' }
        ]        
      },
      { 
        id: 2, 
        columnTitle: 'Movies', 
        icon: 'film',
        cards: [
          { id: 1, cardTitle: 'Harry Potter' },
          { id: 2, cardTitle: 'Star Wars' }
        ]        
      },
      { 
        id: 3, 
        columnTitle: 'Games', 
        icon: 'gamepad',
        cards: [
          { id: 1, cardTitle: 'The Witcher' },
          { id: 2, cardTitle: 'Skyrim' }
        ]        
      }
  ]);
  
  const addColumn = newColumn => {
		setColumns([...columns, { id: shortid(), columnTitle: newColumn.columnTitle, icon: newColumn.icon, cards: [] }]);
  };

  const addCard = (newCard, columnId) => {
    const columnsUpdated = columns.map(column => {
      if(column.id === columnId) return { ...column, cards: [...column.cards, { id: shortid(), cardTitle: newCard.cardTitle }]
      }
      else return column
    })
    setColumns(columnsUpdated);
  };

    return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.title}>Things to do <span>soon</span></h2>
      </header>
        <p className={styles.description}>Interesting things I want to check out</p>
        <section className={styles.columns}>
            {columns.map(column => <Column key={column.id} id={column.id} columnTitle={column.columnTitle} icon={column.icon} cards={column.cards} action={addCard} />)}            
        </section>
        <ColumnForm action={addColumn}  />
    </div>
    );
  };



  export default List;