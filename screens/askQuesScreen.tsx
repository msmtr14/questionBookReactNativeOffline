/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import {connect} from 'react-redux';
import {Screen, Button} from '../Components';
import {AskQuestionScreenProps} from '../utils';
import {NavigationScreenProps} from 'react-navigation';
import {addNewQuest} from '../redux/actions/questionsActions';
import {styles} from './styles';
import {TextInput, Text} from '../Components';

const containerHieght = 150;

type Props = AskQuestionScreenProps & NavigationScreenProps;

export class AskQuestionScreen extends Component<Props> {
  state: any = {
    title: '',
    hasAnswer: false,
  };

  componentDidMount() {
    this.setState({title: ''});
  }

  _performAddQuest = () => {
    const {title, hasAnswer} = this.state;
    const data = {
      id: Math.floor(Math.random() * Math.pow(10, 9)),
      title,
      hasAnswer,
    };
    if (title.length > 9) {
      this.props.dispatch(addNewQuest(data));
    } else {
      Alert.alert('Ques is required! and should have min 10 chars');
    }
  };

  render() {
    const {title} = this.state;
    return (
      <Screen headerTitle={'AskQuestion Screen'} nonSessionCheck hideHeaderBack>
        <View style={{...styles.formContainer}}>
          <View style={{...styles.formFieldView}}>
            <Text>Question: </Text>
            <TextInput
              onChangeText={(text: string) => this.setState({title: text})}
              value={title}
              multiline
              style={{minHeight: containerHieght, textAlignVertical: 'top'}}
            />
          </View>
        </View>

        <Button
          title={'Submit Question'}
          btnStyle={{...styles.submitBtn}}
          onPress={() => this._performAddQuest()}
        />
      </Screen>
    );
  }
}

const mapStateToProps = (IState: any) => ({
  questionReducer: IState.questionReducer,
  isAuth: IState.authReducer.isAuth,
  profileData: IState.authReducer.profileData,
});

export default connect(mapStateToProps)(AskQuestionScreen);
