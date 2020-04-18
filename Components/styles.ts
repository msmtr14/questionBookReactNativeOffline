import {StyleSheet, ViewStyle} from 'react-native';
import {screenHeight} from '../utils/screenDimensions';
export const FULL: ViewStyle = {
  flex: 1,
};

export const CENTER: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

const borderRadius = 5;

export const styles = StyleSheet.create({
  screenContainer: {
    ...FULL,
  },
  scrollViewStyles: {
    minHeight: screenHeight,
    paddingHorizontal: '2%',
  },
  textContainer: {
    color: '#4e4e4e',
  },
  inputTextContainer: {
    width: '90%',
    minHeight: 30,
    backgroundColor: '#ffffff',
    borderWidth: 0.3,
    borderColor: '#444',
    borderRadius,
    paddingVertical: 0,
    paddingHorizontal: '2%',
  },
  btnContainer: {
    minWidth: '50%',
    minHeight: 26,
    ...CENTER,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: '#0275d8',
  },
  btnTxtStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    paddingVertical: 2.5,
    paddingLeft: '3%',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 20,
    color: '#444',
    fontWeight: '500',
    textAlign: 'center',
  },
  headerIcon: {
    position: 'absolute',
    left: '3%',
  },
  loader: {
    flex: 1,
    ...CENTER,
  },
  quesCardBody: {
    width: '100%',
    backgroundColor: '#0275d8',
    minHeight: 80,
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: '2.5%',
    paddingVertical: 15,
    marginTop: 20,
    elevation: 2,
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#aaa',
  },
  quesCardText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'justify',
  },
  quesCardBtn: {
    backgroundColor: 'white',
    minWidth: '50%',
    alignSelf: 'center',
    marginTop: 20,
  },
  quesCardBtnTxt: {
    color: '#0275d8',
  },
});
