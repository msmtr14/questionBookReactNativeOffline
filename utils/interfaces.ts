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
  studentQuestions: StudentQuestionsConfig[];
}

export interface QuestionReducerConfig {
  student: StudentProfileConfig[];
}

export interface AuthReducerConfig {
  isAuth: boolean;
  profileData: StudentProfileConfig;
}
