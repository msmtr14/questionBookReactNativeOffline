import {
  GET_ALL_QUESTION_ANSWERS,
  REGISTER_NEW_STUDENT,
  store,
  ADD_NEW_QUEST,
  CHECK_NEW_STUDENT,
  UPDATE_QUESTION_ANSWER,
} from '../config';
import {StudentQuestionsConfig, StudentProfileConfig} from '../../utils';
import {Alert} from 'react-native';
import {isAuth, getUserProfile} from './authActions';

const dispatch = store.dispatch;

export const getStudent = () => {
  var profileData = store.getState().authReducer.profileData;
  var AllStudents = store.getState().questionReducer.student;
  var indexOfStudent = AllStudents.findIndex(
    (a: StudentProfileConfig) => a.id === profileData.id,
  );
  const response = {profileData, AllStudents, indexOfStudent};
  return response;
};

export const getAllQuesAns = () => {
  return {
    type: GET_ALL_QUESTION_ANSWERS,
    payload: '',
  };
};

export const addNewQuest = (data: StudentQuestionsConfig) => {
  const student = getStudent();
  const AllStudent = student.AllStudents;
  const ques = student.profileData.studentQuestions;
  ques.push({...data});
  AllStudent[student.indexOfStudent].studentQuestions = ques;
  dispatch(getUserProfile(AllStudent[student.indexOfStudent]));

  return {
    type: ADD_NEW_QUEST,
    payload: AllStudent,
  };
};

export const updateAns = (data: StudentQuestionsConfig) => {
  const student = getStudent();
  const AllStudent = student.AllStudents;
  const ques = student.profileData.studentQuestions;
  const quesInd = ques.findIndex((a: StudentProfileConfig) => a.id === data.id);
  ques[quesInd] = data;
  AllStudent[student.indexOfStudent].studentQuestions = ques;
  dispatch(getUserProfile(AllStudent[student.indexOfStudent]));
  return {
    type: UPDATE_QUESTION_ANSWER,
    payload: AllStudent,
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
  const student = getStudent();
  let newData: StudentProfileConfig[] = student.AllStudents;
  let status = false;
  const isStudentPresent = newData.findIndex(
    (a: StudentProfileConfig) => a.email === data.email,
  );
  if (isStudentPresent !== -1) {
    Alert.alert('Already Registered!');
    dispatch(getUserProfile(newData[isStudentPresent]));
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
