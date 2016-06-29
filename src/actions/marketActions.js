import shoeApi from '../api/mockShoeApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadShoesSuccess(shoes) {
  return {type: types.LOAD_SHOES_SUCCESS, shoes};
}

export function createShoeSuccess(shoe) {
  return {type: types.CREATE_SHOE_SUCCESS, shoe};
}

export function updateShoeSuccess(shoe) {
  return {type: types.UPDATE_SHOE_SUCCESS, shoe};
}

export function loadShoes() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return shoeApi.getAllShoes().then(shoes => {
      dispatch(loadShoesSuccess(shoes));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveShoe(shoe) {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return shoeApi.saveShoe(shoe).then(savedShoe => {
      shoe.id ? dispatch(updateShoeSuccess(savedShoe)) :
        dispatch(createShoeSuccess(savedShoe));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}