import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function errorReducer(state = initialState.error, action)
{
  switch (action.type)
  {
    case types.DISPLAY_ERROR_MESSAGE_AMOUNT: {
      console.log(action);
      return  {message:action.error} ;
    }


    default:
      return state;

  }
}
