import {QuestionReducerConfig} from '../../utils';
import {
  ADD_NEW_QUEST,
  UPDATE_QUESTION_ANSWER,
  REGISTER_NEW_STUDENT,
  UPDATE_STUDENT,
} from '../config';

const initialState: QuestionReducerConfig = {
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

    case UPDATE_STUDENT:
      return {
        ...state,
        student: action.payload,
      };

    case ADD_NEW_QUEST:
      return {
        ...state,
        student: action.payload,
      };

    case UPDATE_QUESTION_ANSWER:
      return {...state, student: action.payload};

    default:
      return state;
  }
}

export default questionReducer;
