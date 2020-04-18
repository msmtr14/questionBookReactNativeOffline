/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Screen, QuestionCard, Text} from '../Components';
import {FlatList, View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {HomeScreenProps} from '../utils';
type Props = HomeScreenProps & NavigationScreenProps;

export class HomeScreen extends Component<Props> {
  render() {
    const {studentQuestions} = this.props.questionReducer;
    console.warn(studentQuestions);
    return (
      <Screen hideHeaderBack headerTitle={'Home Screen'}>
        {studentQuestions.length > 0 ? (
          <FlatList
            data={this.props.questionReducer.studentQuestions}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <QuestionCard {...item} />}
          />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{top: 50}}>No Questions Available!</Text>
          </View>
        )}
      </Screen>
    );
  }
}

const mapStateToProps = (IState: any) => ({
  questionReducer: IState.questionReducer,
});

export default connect(mapStateToProps)(HomeScreen);
