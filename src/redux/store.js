import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchItemReducer from './searchItemRedux';


const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchItem: searchItemReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

//selectors
export const getFilteredCards = ({cards, searchItem }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchItem));
export const getAllColumns = (state) => state.columns; 
export const getAllLists = (state) => state.lists; 
export const getSearchItem = (state) => state.searchItem;
//export const getListById = ({lists}, listId) => lists.filter(list => list.id === listId);
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsByListId = ({columns}, listId) => columns.filter(column => column.listId === listId);
export const getFavouriteCards = ({cards}) => cards.filter(card => card.isFavorite === true);

// action creators
export const addList = payload => ({ type: 'ADD_LIST', payload });
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const search = payload => ({ type: 'SEARCH_ITEM', payload });
export const favourite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });