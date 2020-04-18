import React, {PureComponent} from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './styles';
import {Text} from './text';
import {Button} from './button';

class QuestionCard extends PureComponent {
  state = {
    showFull: false,
  };

  render() {
    const {showFull} = this.state;
    const ques =
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
    const t = ques.substr(0, showFull ? Infinity : 200);

    return (
      <TouchableOpacity
        style={styles.quesCardBody}
        onPress={() => this.setState({showFull: !showFull})}>
        <Text style={styles.quesCardText}>
          {t}
          {showFull ? '' : '...'}
        </Text>
        <Button
          btnStyle={styles.quesCardBtn}
          txtStyles={styles.quesCardBtnTxt}
          title={'Write an answer'}
        />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (IState: any) => ({IState});

export default connect(mapStateToProps)(QuestionCard);
