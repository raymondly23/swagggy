import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function shoeReducer(state = initialState.shoes, action) {
  switch(action.type) {
    case types.LOAD_SHOES_SUCCESS: 
      return action.shoes;

    case types.CREATE_SHOE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.shoe)
      ];

    case types.UPDATE_SHOE_SUCCESS:
      return [
        ...state.filter(shoe => shoe.id !== action.shoe.id),
        Object.assign({}, action.shoe)
      ];
      
  default: 
    return state;
  }
}