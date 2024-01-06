// selectors
export const getSearchItem = (state) => state.searchItem;

// actions
const createActionName = actionName => `app/lists/${actionName}`;
const SEARCH_ITEM = createActionName('SEARCH_ITEM');

// action creators
export const search = payload => ({ type: 'SEARCH_ITEM', payload });

const searchItemReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'SEARCH_ITEM':
      return action.payload
    default:
      return statePart;
  }
}

  export default searchItemReducer;