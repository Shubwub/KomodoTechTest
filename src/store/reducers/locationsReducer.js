import {combineReducers} from 'redux';

const initialState = {
  locations: [],
};

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      const {locations} = state;
      locations.push(action.payload);
      return {locations};
    case 'REMOVE_LOCATION':
      return {locations: action.payload};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  locations: locationsReducer,
});

export default rootReducer;
