import React from 'react';
import css from './index.less';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Linear from '../linear';
import QRCode from 'qrcode.react';

import qrBack from 'assert/img/otherImgs/qrBack.png';


export default class LeftHead extends React.Component {
  static propsTypes = {};
  static defaultProps = {
    goodsTaobaoId: '38824121898',
    title: '品牌的力量！一切为了宝宝！为了宝宝的一切！为宝宝提前囤的货，3月份生产的，算是比较新的。',
    picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
    price: '100',
  };

  constructor(props) {
    super(props);
    this.state = {};

  }

  itemClick = (item, name) => {
    this.props.onClick(item, name);
  };


  render() {
    const {price, picUrl, goodsTaobaoId, title} = this.props;

    const codeProps = {
      className: css.code,
      style: {
        // background: `url(${qrBack}) no-repeat center / 120%`,
        // background: `url('${qrBack}') no-repeat center / 100% 100%`,

      },
    };
    // console.log('goodsTaobaoId', goodsTaobaoId);
    return (
      <div className={css.skuWrapper}>
        <img src={`${picUrl}_q80_.webp`}/>
        <p>{title}</p>
        <footer className={css.footer}>
          <div className={css.footerLeft}>
            <span className={css.price}>&yen;{price.split('.')[0]}</span>
          </div>
          <div {...codeProps}>
            <img src={qrBack}/>
            <QRCode value={`https://detail.tmall.com/item.htm?spm=a220z.1000880.0.0.kltHhJ&id=${goodsTaobaoId}`}/>
          </div>
        </footer>
        <hr className={css.bottomLinear}/>

      </div>
    );
  }
}
