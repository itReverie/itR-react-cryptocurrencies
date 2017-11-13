import * as types from './actionTypes';

export function displayErrorMessageAmount(error){
  return {type: types.DISPLAY_ERROR_MESSAGE_AMOUNT, error};
}


