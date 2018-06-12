
import React, {Fragment} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import css from './index.less';


const INTERVAL = 1000;

export default class CountDown extends React.Component {

  static propTypes = {

  };

  static defaultProps = {

  };


  constructor(props) {
    super(props);
    this.state = {
      countEnd: false,
    };

  }

  componentDidMount() {
    this.startCountDown(() => this.showMask());
  }

  componentWillUnmount() {

  }

  showMask() {
    // console.log('计时完成');
    this.props.countEnd();
  };

  startCountDown = (callback) => {
    // console.log(111);
    const countDown = () => {
      // console.log(this.state.timeNum);
      this.setState((preState) => {
        return {
          timeNum: preState.timeNum - 1,
        };
      }, () => {
        if (this.state.timeNum && this.state.timeNum >= 1) {
          this.countTimer = setTimeout(() => countDown(), INTERVAL);
        } else {
          this.setState({
            timeNum: 0,
            counting: false
          }, () => {
            callback();
          });
        }
      });
    };
    if (!this.state.counting) {
      this.setState({
        timeNum: this.props.time,
        counting: true,
      }, () => {
        this.countTimer = setTimeout(() => countDown(), INTERVAL);
      });
    }
  };



  render() {

    const { } = this.props;
    const { timeNum } = this.state;

    const props = {
      style: {

      }
    };

    return (
      <span {...props}>{timeNum}</span>

    );
  }
}
