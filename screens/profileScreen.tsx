/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {Screen} from '../Components';
import {styles} from './styles';
import {ProfileScreenProps, StudentProfileConfig} from '../utils';
import {months} from '../utils/months';

export class ProfileScreen extends Component<ProfileScreenProps> {
  render() {
    const data: StudentProfileConfig = this.props.profileData;
    const joiningDate = data.joiningDate;
    const date = new Date(joiningDate);
    const formattedDate = `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
    return (
      <Screen hideHeaderBack headerTitle={'Profile Screen'}>
        {data && (
          <View style={{flex: 1}}>
            <Image
              style={{...styles.detailImg}}
              source={{
                uri: 'https://i.dlpng.com/static/png/6728146_preview.png',
              }}
            />
            <View style={{...styles.detailBody}}>
              <View style={{...styles.detailTitle}}>
                <View style={{...styles.detailLeftView}}>
                  <Text style={{...styles.detailLeftTxt}}>Name :</Text>
                </View>
                <View style={{...styles.detailRightView}}>
                  <Text numberOfLines={1} style={{...styles.detailRightTxt}}>
                    {data.name}
                  </Text>
                </View>
              </View>
              <View style={{...styles.detailTitle}}>
                <View style={{...styles.detailLeftView}}>
                  <Text style={{...styles.detailLeftTxt}}>Email :</Text>
                </View>
                <View style={{...styles.detailRightView}}>
                  <Text numberOfLines={1} style={{...styles.detailRightTxt}}>
                    {data.email}
                  </Text>
                </View>
              </View>
              <View style={{...styles.detailTitle}}>
                <View style={{...styles.detailLeftView}}>
                  <Text style={{...styles.detailLeftTxt}}>Joining Date :</Text>
                </View>
                <View style={{...styles.detailRightView}}>
                  <Text numberOfLines={1} style={{...styles.detailRightTxt}}>
                    {formattedDate}
                  </Text>
                </View>
              </View>

              <View style={{...styles.detailTitle}}>
                <View style={{...styles.detailLeftView}}>
                  <Text style={{...styles.detailLeftTxt}}>
                    Total Questions :
                  </Text>
                </View>
                <View style={{...styles.detailRightView}}>
                  <Text numberOfLines={1} style={{...styles.detailRightTxt}}>
                    {data.studentQuestions.length}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </Screen>
    );
  }
}

const mapStateToProps = (IState: any) => ({
  profileData: IState.authReducer.profileData,
});

export default connect(mapStateToProps)(ProfileScreen);
