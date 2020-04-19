import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import {connect} from 'react-redux';
import {Screen, Button} from '../Components';
import {SignupScreenProps, ValidateEmail} from '../utils';
import {NavigationScreenProps} from 'react-navigation';
import {checkNewStudent} from '../redux/actions/questionsActions';
import {styles} from './styles';
import {TextInput, Text} from '../Components';

type Props = SignupScreenProps & NavigationScreenProps;

export class SignupScreen extends Component<Props> {
  state: any = {
    id: Math.floor(Math.random() * Math.pow(10, 9)),
    name: 'Mohit',
    email: 'mohit@gmail.com',
    joiningDate: new Date(),
    numberOfQuesAsked: 0,
  };

  _performAddStudent = () => {
    const {id, name, email, joiningDate, numberOfQuesAsked} = this.state;
    const data = {
      id,
      name,
      email,
      joiningDate,
      numberOfQuesAsked,
    };
    if (name.length > 2) {
      if (ValidateEmail(email)) {
        this.props.dispatch(checkNewStudent(data));
      } else {
        Alert.alert('Invalid Email!');
      }
    } else {
      Alert.alert('Name is required! and should have min 3 chars');
    }
  };

  render() {
    const {name, email, joiningDate} = this.state;
    if (this.props.isAuth) {
      this.props.navigation.navigate('HomeScreen');
    }
    // console.warn(this.props.questionReducer);
    return (
      <Screen headerTitle={'SignUp Screen'} nonSessionCheck hideHeaderBack>
        <View style={{...styles.formContainer}}>
          <View style={{...styles.formFieldView}}>
            <Text>Name: </Text>
            <TextInput
              onChangeText={(text: string) => this.setState({name: text})}
              value={name}
            />
          </View>
          <View style={{...styles.formFieldView}}>
            <Text>Email: </Text>
            <TextInput
              onChangeText={(text: string) => this.setState({email: text})}
              value={email}
              keyboardType={'email-address'}
            />
            {email !== '' && !ValidateEmail(email) && (
              <Text style={{...styles.errorEmail}}>Invalid Email</Text>
            )}
          </View>
          <View style={{...styles.formFieldView}}>
            <Text>Joining Date: </Text>
            <TextInput nonEditable value={joiningDate} />
          </View>
        </View>

        <Button
          title={'Submit'}
          btnStyle={{...styles.submitBtn}}
          onPress={() => this._performAddStudent()}
        />
      </Screen>
    );
  }
}

const mapStateToProps = (IState: any) => ({
  questionReducer: IState.questionReducer,
  isAuth: IState.authReducer.isAuth,
});

export default connect(mapStateToProps)(SignupScreen);
