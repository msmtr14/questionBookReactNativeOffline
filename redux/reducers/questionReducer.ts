import {QuestionReducerConfig} from '../../utils';
import {
  ADD_NEW_QUEST,
  UPDATE_QUESTION_ANSWER,
  REGISTER_NEW_STUDENT,
} from '../config';

const initialState: QuestionReducerConfig = {
  studentQuestions: [],
  student: [],
};

function questionReducer(
  state: QuestionReducerConfig = initialState,
  action: any,
) {
  switch (action.type) {
    case REGISTER_NEW_STUDENT:
      return {
        ...state,
        student: action.payload,
      };

    case ADD_NEW_QUEST:
      return {
        ...state,
        studentQuestions: [...state.studentQuestions, action.payload],
      };

    case UPDATE_QUESTION_ANSWER:
      return {...state, studentQuestionsUpdate: action.payload};

    default:
      return state;
  }
}

export default questionReducer;
