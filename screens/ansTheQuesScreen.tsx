/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import {connect} from 'react-redux';
import {Screen, Button} from '../Components';
import {AskQuestionScreenProps} from '../utils';
import {NavigationScreenProps} from 'react-navigation';
import {updateAns} from '../redux/actions/questionsActions';
import {styles} from './styles';
import {TextInput, Text} from '../Components';

const containerHieght = 150;

type Props = AskQuestionScreenProps & NavigationScreenProps;

export class AnsTheQuesScreen extends Component<Props> {
  state: any = {
    id: 0,
    title: '',
    hasAnswer: true,
    answer: '',
  };

  componentDidMount() {
    this._setData();
  }

  _setData = () => {
    const id = this.props.navigation.getParam('id', 0);
    const title = this.props.navigation.getParam('title', '');
    const answer = this.props.navigation.getParam('answer', '');
    this.setState({id, title, answer});
  };

  _performAddAns = () => {
    const {id, title, hasAnswer, answer} = this.state;
    const data = {
      id,
      title,
      hasAnswer,
      answer,
    };
    if (title.length > 9) {
      this.props.dispatch(updateAns(data));
    } else {
      Alert.alert('Answer is required! and should have min 10 chars');
    }
  };

  render() {
    const {title, answer} = this.state;
    console.log(this.state);
    return (
      <Screen headerTitle={'Answer Form'} nonSessionCheck>
        <View style={{marginVertical: 15, paddingHorizontal: '2.5%'}}>
          <Text style={{fontSize: 19}}>{title}</Text>
        </View>
        <View style={{...styles.formContainer}}>
          <View style={{...styles.formFieldView}}>
            <Text>Answer: </Text>
            <TextInput
              onChangeText={(text: string) => this.setState({answer: text})}
              value={answer}
              multiline
              style={{minHeight: containerHieght}}
            />
          </View>
        </View>

        <Button
          title={'Submit Answer'}
          btnStyle={{...styles.submitBtn}}
          onPress={() => this._performAddAns()}
        />
      </Screen>
    );
  }
}

const mapStateToProps = (IState: any) => ({
  questionReducer: IState.questionReducer,
  isAuth: IState.authReducer.isAuth,
});

export default connect(mapStateToProps)(AnsTheQuesScreen);
