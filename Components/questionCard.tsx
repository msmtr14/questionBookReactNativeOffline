import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './styles';
import {Text} from './text';
import {Button} from './button';
import {StudentQuestionsConfig} from '../utils';

interface Props extends StudentQuestionsConfig {
  navigation?: any;
}

class QuestionCard extends Component<Props> {
  state = {
    showFull: false,
  };

  render() {
    const {showFull} = this.state;
    const {title, hasAnswer, navigation, answer} = this.props;
    const t = (answer || title).substr(0, showFull ? Infinity : 200);

    return (
      <TouchableOpacity
        disabled={title.length <= 200}
        style={styles.quesCardBody}
        onPress={() => this.setState({showFull: !showFull})}>
        <Text style={styles.quesCardText}>{t}</Text>
        <Button
          btnStyle={styles.quesCardBtn}
          txtStyles={styles.quesCardBtnTxt}
          title={hasAnswer ? 'Update Answer' : 'Write an answer'}
          onPress={() =>
            navigation.navigate('AnsTheQuesScreen', {...this.props})
          }
        />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (IState: any) => ({IState});

export default connect(mapStateToProps)(QuestionCard);
