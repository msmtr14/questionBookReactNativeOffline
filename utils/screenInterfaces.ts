export interface ComponentReduxPropsConfig {
  dispatch?: any;
  IState?: any;
}

export interface SignupScreenProps extends ComponentReduxPropsConfig {
  questionReducer?: any;
}
