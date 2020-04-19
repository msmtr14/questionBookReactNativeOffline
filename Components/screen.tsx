import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  ViewStyle,
  ScrollViewProps,
} from 'react-native';
import {styles, FULL} from './styles';
import {SafeAreaViewProps} from 'react-navigation';
import Header from './header';

interface ScreenPropsConfig {
  preset?: 'scroll' | 'fixed';
  style?: ViewStyle;
  scrollViewRest?: ScrollViewProps;
  hideHeader?: boolean;
  hideHeaderBack?: boolean;
  headerTitle?: string;
  nonSessionCheck?: boolean;
  rest?: SafeAreaViewProps;
}

export class Screen extends Component<ScreenPropsConfig> {
  render() {
    const {
      preset,
      style,
      scrollViewRest,
      hideHeader,
      headerTitle,
      hideHeaderBack,
      nonSessionCheck,
      rest,
    } = this.props;
    return (
      <SafeAreaView style={{...styles.screenContainer, ...style}} {...rest}>
        {!hideHeader && (
          <Header
            nonBack={hideHeaderBack}
            title={headerTitle || ''}
            nonSessionCheck={nonSessionCheck}
          />
        )}
        {!preset || preset === 'scroll' ? (
          <ScrollView
            style={{...FULL, ...styles.scrollViewStyles}}
            {...scrollViewRest}>
            {this.props.children}
          </ScrollView>
        ) : (
          this.props.children
        )}
      </SafeAreaView>
    );
  }
}
