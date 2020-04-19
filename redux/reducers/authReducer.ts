import {AuthReducerConfig} from '../../utils';
import {IS_AUTH, GET_USERS_PROFILE} from '../config';

const initialState: AuthReducerConfig = {
  isAuth: false,
  profileData: {
    id: 0,
    name: '',
    email: '',
    numberOfQuesAsked: 0,
    joiningDate: '',
  },
};

function authReducer(state: AuthReducerConfig = initialState, action: any) {
  switch (action.type) {
    case IS_AUTH:
      return {...state, isAuth: action.payload};

    case GET_USERS_PROFILE:
      return {...state, profileData: action.payload};

    default:
      return state;
  }
}

export default authReducer;
