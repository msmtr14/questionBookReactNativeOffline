import {GET_ALL_QUESTION_ANSWERS, REGISTER_NEW_STUDENT, store} from '../config';
const AllQuesAns = store.getState();

export const getAllQuesAns = () => {
  return {
    type: GET_ALL_QUESTION_ANSWERS,
    payload: '',
  };
};

export const registerStudent = () => {
  console.log(AllQuesAns);
  return {
    type: REGISTER_NEW_STUDENT,
    payload: '',
  };
};
