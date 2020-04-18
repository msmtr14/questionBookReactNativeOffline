import {QuestionReducerConfig} from '../../utils';

const initialState: QuestionReducerConfig = {
  studentQuestions: [],
};

function questionReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case 'GET':
      return {...state, data: action.payload};

    default:
      return state;
  }
}

export default questionReducer;
