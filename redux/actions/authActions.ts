import {IS_AUTH} from '../config';

export const isAuth = (val: boolean) => {
  return {
    type: IS_AUTH,
    payload: val,
  };
};
