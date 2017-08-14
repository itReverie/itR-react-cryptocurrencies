import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function returnPercentageReducer(state = initialState.returnPercentage, action)
{
  switch (action.type)
  {
    case types.CALCULATE_RETURN_SUCCESS:
      return action.returnPercentage;

    default:
      return state;

  }
}
