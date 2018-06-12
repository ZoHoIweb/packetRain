
import React, {Fragment} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import css from './index.less';

import CountDown from './countDown';
import PixiPacket from './pixiPacket';

import startPacket from 'assert/img/otherImgs/startPacket.png';
import packetBg from 'assert/img/otherImgs/packetBg.png';
import endQuan from 'assert/img/otherImgs/endQuan.png';



export default class Pocket extends React.Component {

  static propTypes = {
    toPage: PropTypes.func,
  };

  static defaultProps = {

  };


  constructor(props) {
    super(props);
    this.state = {
      firstCount: true,
      secondCount: false,
      allCountEnd: false,
    };

    this.pixiRef = React.createRef();
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  firstEndFunc() {
    this.setState({
      firstCount: false,
      secondCount: true,
    }, () => {  // 保证在重渲染之后取得ref
      const App = new PixiPacket();
      this.pixiRef.current.appendChild(App.app.view);
    });
  };

  render() {

    const { toPage = () => {}, } = this.props;
    const { firstCount, secondCount, allCountEnd } = this.state;

    const firstCountProps = {
      countEnd: () => {
        this.firstEndFunc();
      },
      time: 3,
    };
    const secondCountProps = {
      countEnd: () => {
        this.setState({
          allCountEnd: true,
          secondCount: false,
        });
      },
      time: 10,
    };


    return (
      <div className={css.packetWrapper} style={{background: `url(${packetBg}) no-repeat`}}>
        { // 第一次倒计时
          firstCount && <div className={css.firstWrapper}>
            <div className={css.firstTime}>
              倒数<CountDown {...firstCountProps}/>秒
            </div>
            <img src={startPacket}/>
          </div>
        }
        { // 第二次倒计时以及第二次结束都会存在
          (secondCount || allCountEnd) && <div className={css.secondTime}>
            <p>剩余时间</p><br/><span>0:</span>
            <CountDown {...secondCountProps}/>
          </div>
        }
        { // 第二次倒计时的时候渲染pixi红包雨
          secondCount && <div className={css.secondWrapper}>
            <div ref={this.pixiRef}/>
          </div>
        }
        { // 第二次倒计时结束后出领奖图片
          allCountEnd && <div className={css.jiang}>
            <img src={endQuan}/>
            <div onClick={() => toPage()}/>
          </div>
        }
      </div>
    );
  }
}
