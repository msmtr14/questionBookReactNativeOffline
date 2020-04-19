export interface ComponentReduxPropsConfig {
  dispatch?: any;
  IState?: any;
}

export interface SignupScreenProps extends ComponentReduxPropsConfig {
  questionReducer?: any;
  isAuth?: boolean;
}
export interface HomeScreenProps extends ComponentReduxPropsConfig {
  questionReducer?: any;
  isAuth?: boolean;
}

export interface AskQuestionScreenProps extends ComponentReduxPropsConfig {
  questionReducer?: any;
  isAuth?: boolean;
}

export interface ProfileScreenProps extends ComponentReduxPropsConfig {
  profileData?: any;
  isAuth?: boolean;
}
