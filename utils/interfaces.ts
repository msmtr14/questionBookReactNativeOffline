export interface StudentQuestionsConfig {
  id: number;
  title: string;
  hasAnswer?: boolean;
}

export interface StudentProfileConfig {
  id: number;
  name: string;
  email?: boolean;
  joiningDate: string | number;
  numberOfQuesAsked: number;
}

export interface QuestionReducerConfig {
  studentQuestions: StudentQuestionsConfig[];
  student: StudentProfileConfig[];
}
