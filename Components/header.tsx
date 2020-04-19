import * as React from 'react';
import {View, ViewStyle, Platform} from 'react-native';
import {styles} from './styles';
import {withNavigation} from 'react-navigation';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import {Text} from './text';
import {isAuth} from '../redux/actions/authActions';
import {useDispatch, useSelector} from 'react-redux';

IoniconIcon.loadFont();
interface HeaderProps {
  navigation?: any;
  title?: string;
  nonBack?: boolean;
  nonSessionCheck?: boolean;
  iconStyle?: ViewStyle;
}
const Header: React.FunctionComponent<HeaderProps> = ({
  navigation,
  iconStyle,
  title,
  nonSessionCheck,
  nonBack,
}) => {
  const dispatch = useDispatch();
  const isAuthCheck: boolean = useSelector(
    (state: any) => state.authReducer.isAuth,
  );

  if (!isAuthCheck) {
    navigation.navigate('SignupScreen');
  }

  return (
    <View style={{...styles.headerContainer}}>
      {!nonBack && (
        <IoniconIcon
          name="ios-arrow-round-back"
          size={44}
          style={{...styles.headerIcon, ...iconStyle}}
          onPress={() => navigation.goBack()}
        />
      )}
      <Text style={{...styles.headerTitle}}>{title || ''}</Text>
      {!nonSessionCheck && (
        <IoniconIcon
          name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-log-out`}
          size={38}
          style={{...styles.headerIconRight, ...iconStyle}}
          onPress={() => dispatch(isAuth(false))}
        />
      )}
    </View>
  );
};
//
export default withNavigation(Header);
