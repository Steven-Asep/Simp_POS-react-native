import {combineReducers} from 'redux';

const tokenReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE':
      return action.data;
    case 'CLEAR':
      return null;
    default:
      return state;
  }
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.data;
    case 'CHANGE_ID':
      return {
        ...state,
        id: action.data.id,
      };
    case 'CLEAR':
      return null;
    default:
      return state;
  }
};