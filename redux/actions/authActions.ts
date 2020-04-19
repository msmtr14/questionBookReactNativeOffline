import {IS_AUTH, GET_USERS_PROFILE} from '../config';
import {StudentProfileConfig} from '../../utils';

export const isAuth = (val: boolean) => {
  return {
    type: IS_AUTH,
    payload: val,
  };
};

export const getUserProfile = (data: StudentProfileConfig) => {
  return {
    type: GET_USERS_PROFILE,
    payload: data,
  };
};
