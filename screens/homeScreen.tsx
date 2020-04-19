/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Screen, QuestionCard, Text} from '../Components';
import {FlatList, View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {HomeScreenProps, reverseArray} from '../utils';
type Props = HomeScreenProps & NavigationScreenProps;

export class HomeScreen extends Component<Props> {
  render() {
    const {studentQuestions} = this.props.profileData;
    const sortedData = reverseArray(studentQuestions);
    return (
      <Screen hideHeaderBack headerTitle={'Home Screen'}>
        {studentQuestions.length > 0 ? (
          <FlatList
            data={sortedData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <QuestionCard {...item} navigation={this.props.navigation} />
            )}
          />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{top: 50, color: '#000'}}>
              No Questions Available!
            </Text>
          </View>
        )}
      </Screen>
    );
  }
}

const mapStateToProps = (IState: any) => ({
  profileData: IState.authReducer.profileData,
});

export default connect(mapStateToProps)(HomeScreen);
