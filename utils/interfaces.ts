export interface StudentQuestionsConfig {
  id: number;
  title: string;
  answer?: string;
  hasAnswer?: boolean;
}

export interface StudentProfileConfig {
  id: number;
  name: string;
  email?: string;
  joiningDate: string | number;
  numberOfQuesAsked: number;
}

export interface QuestionReducerConfig {
  studentQuestions: StudentQuestionsConfig[];
  student: StudentProfileConfig[];
}

export interface AuthReducerConfig {
  isAuth: boolean;
  profileData: StudentProfileConfig;
}
