import {
  GET_ALL_QUESTION_ANSWERS,
  REGISTER_NEW_STUDENT,
  store,
  ADD_NEW_QUEST,
  CHECK_NEW_STUDENT,
} from '../config';
import {StudentQuestionsConfig, StudentProfileConfig} from '../../utils';
import {Alert} from 'react-native';
import {isAuth} from './authActions';
// const AllQuesAns = store.getState().questionReducer.studentQuestions;
const AllStudents = store.getState().questionReducer.student;
const dispatch = store.dispatch;

export const getAllQuesAns = () => {
  return {
    type: GET_ALL_QUESTION_ANSWERS,
    payload: '',
  };
};

export const addNewQuest = (data: StudentQuestionsConfig) => {
  return {
    type: ADD_NEW_QUEST,
    payload: data,
  };
};
export const registerStudent = (data: StudentProfileConfig[]) => {
  if (data) {
    isAuth(true);
    Alert.alert('Successfully Registered!');
  }

  return {
    type: REGISTER_NEW_STUDENT,
    payload: data,
  };
};

export const checkNewStudent = (data: StudentProfileConfig) => {
  let newData: StudentProfileConfig[] = AllStudents;
  let status = false;
  const isStudentPresent =
    AllStudents.indexOf(
      (a: StudentProfileConfig) => a.email === data?.email,
    ) !== -1;
  console.warn(AllStudents);
  if (isStudentPresent) {
    Alert.alert('Already Registered!');
  } else {
    newData.push(data);
    status = true;
    dispatch(registerStudent(newData));
  }
  return {
    type: CHECK_NEW_STUDENT,
    payload: status,
  };
};
