import PropTypes from 'prop-types';
// import classnames from 'classnames';
import React from 'react';
import css from './index.less';

import Swiper3d from './swiper3d';
import Shader from './swiper3d/shader';
import Details from './detail';
import Packet from '../pocket';

import bg from 'assert/img/otherImgs/bg.jpg';
import head from 'assert/img/otherImgs/head.png';
import logo from 'assert/img/otherImgs/logo.png';
import bottom1 from 'assert/img/otherImgs/bottom1.png';
import itemBg from 'assert/img/otherImgs/item.png';


export default class RenderClass extends React.Component {

  static propTypes = {
    itemDetail: PropTypes.array.isRequired,
    switchRoute: PropTypes.func,
    selectedInd: PropTypes.number,
  };

  static defaultProps = {
    itemDetail: [
      {
        name: '拖把系列',
        goods: [
          {
            goodsTaobaoId: '38824121898',
            picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
            title: '撒地方撒水电费范围为房屋是否发顺丰威风威风',
            price: '198.00',
            soldQuantity: '123465',
          },
          {
            goodsTaobaoId: '38824121898',
            picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
            title: '222',
            price: '198.00',
            soldQuantity: '123465',
          },
          {
            goodsTaobaoId: '38824121898',
            picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
            title: '333',
            price: '198.00',
            soldQuantity: '123465',
          },
        ],
      },
      {
        name: '清洁工具',
        goods: [
          {
            goodsTaobaoId: '38824121898',
            picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
            title: '1111',
            price: '198.00',
            soldQuantity: '123465',
          },
          {
            goodsTaobaoId: '38824121898',
            picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
            title: '222',
            price: '198.00',
            soldQuantity: '123465',
          },
          {
            goodsTaobaoId: '38824121898',
            picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
            title: '333',
            price: '198.00',
            soldQuantity: '123465',
          },
        ],
      },
      {
        name: '家具收纳',
        goods: [
          {
            goodsTaobaoId: '38824121898',
            picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
            title: '1111',
          },
          {
            goodsTaobaoId: '38824121898',
            picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
            title: '222',
          },
          {
            goodsTaobaoId: '38824121898',
            picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
            title: '333',
          },
        ],
      },
      {
        name: '一次性用品',
        goods: [
          {
            goodsTaobaoId: '38824121898',
            picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
            title: '1111',
          },
          {
            goodsTaobaoId: '38824121898',
            picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
            title: '222',
          },
          {
            goodsTaobaoId: '38824121898',
            picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
            title: '333',
          },
        ],
      },
      {
        name: '卫浴用品',
        goods: [
          {
            goodsTaobaoId: '38824121898',
            picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
            title: '1111',
          },
          {
            goodsTaobaoId: '38824121898',
            picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
            title: '222',
          },
          {
            goodsTaobaoId: '38824121898',
            picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
            title: '333',
          },
        ],
      },
    ],
    selectedInd: 0,
    slideData: [
      {
        imgUrl: 'https://img.alicdn.com/imgextra/i3/3355153118/TB2QyGmacbI8KJjy1zdXXbe1VXa-3355153118.jpg',
        id: '38824121898',
      },
      {
        imgUrl: 'https://img.alicdn.com/imgextra/i1/3355153118/TB2pyooahPI8KJjSspfXXcCFXXa-3355153118.jpg',
        id: '222',
      },
      {
        imgUrl: 'https://img.alicdn.com/imgextra/i4/3355153118/TB2EzktacLJ8KJjy0FnXXcFDpXa-3355153118.jpg',
        id: '38824121898',
      },
      {
        imgUrl: 'https://img.alicdn.com/imgextra/i4/3355153118/TB2z5Esaf2H8KJjy0FcXXaDlFXa-3355153118.jpg',
        id: '38824121898',
      },
      {
        imgUrl: 'https://img.alicdn.com/imgextra/i2/3355153118/TB2DqQsahTI8KJjSspiXXbM4FXa-3355153118.jpg',
        id: '38824121898',
      },
      {
        imgUrl: 'https://img.alicdn.com/imgextra/i4/3355153118/TB20cixaf6H8KJjSspmXXb2WXXa-3355153118.png',
        id: '38824121898',
      }
    ],
  };


  constructor(props) {
    super(props);
    this.state = {
      detailsId: -1,
      showDetails: false,
      showSlider: true,
      showPacket: false,
    };

    this.itemDetail = this.initData(props.itemDetail.slice(0));

    // 用美丽雅的分类数据并处理

    console.log('this.itemDetail', this.itemDetail);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  initData = (data) => {
    let [dataOne] = data;
    let newData = [];
    dataOne.children.map( (item, index) => {
      newData = newData.concat(item.goods);
    });
    return newData;
  };

  getClass(ind) {
    if (ind === 0) {
      this.props.switchRoute('Slider');
    }
    this.setState({
      selectedInd: ind,
    });
  }


  getId = (ind) => {

    this.setState({
      detailsId: this.props.slideData[ind - 1].id,
      showDetails: true,
    });

  };
  toPage() {
    this.setState({
      showPacket: false,
      showSlider: true,
    });
  }

  showSliderFunc() {
    this.setState({
      showSlider: false,
    });
  }


  renderImgs = (item, index) => {

    const boxProps = {
      key: index,
      className: css.box,
      style: {
        marginLeft: (index + 1) % 3 === 1 ? '0' : '10px',
        background: `url(${itemBg}) no-repeat`,
      },
      onClick: () => {
        this.setState({
          detailsId: item.goodsTaobaoId,
          showDetails: true,
        });
      },

    };

    const imgProps = {
      // src: item.picUrl,
      src: `${item.picUrl}_q80_.webp`,
      className: css.img,
    };

    return (
      <div {...boxProps}>
        <img {...imgProps}/>
        <div className={css.title}>{`${item.title.slice(0, 21)}...`}</div>
      </div>
    );
  };

  render() {

    const {detailsId, showDetails, showSlider, showPacket} = this.state;
    const {slideData} = this.props;

    const detailsProps = {
      detailsId,
      itemDetail: this.itemDetail.goods,
      hidden: () => {
        this.setState({
          showDetails: false,
        });
      },
    };

    const bottomProps = {
      className: css.bottom,
      src: bottom1,
      onClick: () => {
        this.setState({
          showPacket: true,
        });
      },
    };

    return (
      <div className = {css.wrapper}>
        <img src={bg} className = {css.bg}/>
        <img src={head} className = {css.head}/>
        <img src={logo} className = {css.logo}/>
        <div className={css.boxWrapper}>
          {
            this.itemDetail.map( (item, index) => {
              return this.renderImgs(item, index);
            })
          }
        </div>
        <img {...bottomProps}/>
        {
          showSlider && <Shader onClick={ this.showSliderFunc.bind(this)}>
            <Swiper3d slideData={slideData} getId={this.getId.bind(this)}/>
          </Shader>
        }
        {
          showDetails && <Details {...detailsProps}/>
        }
        {
          showPacket && <Packet toPage={this.toPage.bind(this)}/>
        }
      </div>

    );
  }
}
