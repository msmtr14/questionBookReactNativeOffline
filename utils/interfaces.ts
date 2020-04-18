export interface StudentQuestionsConfig {
  id: number;
  title: string;
  hasAnswer?: boolean;
}

export interface QuestionReducerConfig {
  studentQuestions: StudentQuestionsConfig[];
}
