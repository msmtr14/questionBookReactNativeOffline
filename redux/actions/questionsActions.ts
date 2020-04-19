import {
  GET_ALL_QUESTION_ANSWERS,
  REGISTER_NEW_STUDENT,
  store,
  ADD_NEW_QUEST,
  CHECK_NEW_STUDENT,
  UPDATE_QUESTION_ANSWER,
  UPDATE_STUDENT,
} from '../config';
import {StudentQuestionsConfig, StudentProfileConfig} from '../../utils';
import {Alert} from 'react-native';
import {isAuth, getUserProfile} from './authActions';
const AllQuesAns = store.getState().questionReducer.studentQuestions;
const AllStudents = store.getState().questionReducer.student;
const studentId = store.getState().authReducer.profileData.id;
const dispatch = store.dispatch;

export const getAllQuesAns = () => {
  return {
    type: GET_ALL_QUESTION_ANSWERS,
    payload: '',
  };
};

export const updateStudent = () => {
  let studentData = AllStudents;
  const getIndexOfStudent = AllStudents.findIndex(
    (a: StudentProfileConfig) => a.id === studentId,
  );
  studentData[getIndexOfStudent].numberOfQuesAsked += 1;

  return {
    type: UPDATE_STUDENT,
    payload: studentData,
  };
};

export const addNewQuest = (data: StudentQuestionsConfig) => {
  dispatch(updateStudent());
  return {
    type: ADD_NEW_QUEST,
    payload: data,
  };
};

export const updateAns = (data: StudentQuestionsConfig) => {
  const quesData = AllQuesAns;
  const getIndexOfQues = quesData.findIndex(
    (a: StudentQuestionsConfig) => a.id === data.id,
  );
  quesData[getIndexOfQues] = data;

  return {
    type: UPDATE_QUESTION_ANSWER,
    payload: quesData,
  };
};

export const registerStudent = (data: StudentProfileConfig[]) => {
  if (data) {
    dispatch(isAuth(true));
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
  console.warn('data.email : ', data.email);
  const isStudentPresent = AllStudents.findIndex(
    (a: StudentProfileConfig) => a.email === data.email,
  );
  console.log(isStudentPresent);
  if (isStudentPresent !== -1) {
    Alert.alert('Already Registered!');
    dispatch(getUserProfile(AllStudents[isStudentPresent]));
    dispatch(isAuth(true));
  } else {
    newData.push(data);
    status = true;
    dispatch(registerStudent(newData));
    dispatch(getUserProfile(data));
  }
  return {
    type: CHECK_NEW_STUDENT,
    payload: status,
  };
};
