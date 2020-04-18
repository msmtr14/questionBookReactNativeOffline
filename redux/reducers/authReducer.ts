import {AuthReducerConfig} from '../../utils';
import {IS_AUTH} from '../config';

const initialState: AuthReducerConfig = {
  isAuth: false,
};

function authReducer(state: AuthReducerConfig = initialState, action: any) {
  switch (action.type) {
    case IS_AUTH:
      return {...state, isAuth: action.payload};

    default:
      return state;
  }
}

export default authReducer;
