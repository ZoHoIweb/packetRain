import PropTypes from 'prop-types';
// import classnames from 'classnames';
import React from 'react';
import css from './index.less';


export default class RenderClass extends React.Component {

  static propTypes = {
    slideData: PropTypes.array.isRequired,

  };

  static defaultProps = {
    slideData: [
      {
        imgUrl: 'https://img.alicdn.com/imgextra/i3/3355153118/TB2luMmanTI8KJjSsphXXcFppXa-3355153118.jpg',
        id: '',
      },
      {
        imgUrl: 'https://img.alicdn.com/imgextra/i1/3355153118/TB2pyooahPI8KJjSspfXXcCFXXa-3355153118.jpg',
        id: '',
      },
      {
        imgUrl: 'https://img.alicdn.com/imgextra/i4/3355153118/TB2EzktacLJ8KJjy0FnXXcFDpXa-3355153118.jpg',
        id: '',
      },
      {
        imgUrl: 'https://img.alicdn.com/imgextra/i4/3355153118/TB2z5Esaf2H8KJjy0FcXXaDlFXa-3355153118.jpg',
        id: '',
      },
      {
        imgUrl: 'https://img.alicdn.com/imgextra/i2/3355153118/TB2DqQsahTI8KJjSspiXXbM4FXa-3355153118.jpg',
        id: '',
      },
      {
        imgUrl: 'https://img.alicdn.com/imgextra/i3/3355153118/TB2QyGmacbI8KJjy1zdXXbe1VXa-3355153118.jpg',
        id: '',
      }
    ],

  };


  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };


    // console.log('this.itemDetail', this.itemDetail);
  }

  componentDidMount() {

    this.newSwiper();
  }

  componentWillUnmount() {

  }

  newSwiper = () => {
    const that = this;
    new Swiper('.swiper-container', {
      loop: true,
      grabCursor: true,
      // initialSlide: 0,
      centeredSlides: true,
      slidesPerView: 'auto',
      autoplay: true,
      delay: 3000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'my-bullet',
        bulletActiveClass: 'my-bullet-active',
      },
      effect : 'cube',
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 100,
        shadowScale: 0.6
      },
      on: {
        slideChange: function() {
          let { activeIndex } = this;
          const { active } = that;
          if (active !== activeIndex) {
            if (activeIndex === 7) activeIndex = 1;
            if (activeIndex === 0) activeIndex = 6; // 切换时图片1的active是1
            that.setState({
              active: activeIndex
            });
          }
        },
      }
    });
  };



  render() {

    const {slideData = [], getId = () => {}} = this.props;

    return (
      <div onClick={ () => getId(this.state.active)}>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              slideData.map((item, index) => {
                const props = {
                  key: index,
                  className: 'swiper-slide',
                  src: item.imgUrl,
                };
                return <img {...props} />;
              })
            }
          </div>
          <div className={'swiper-pagination'}/>
        </div>
      </div>
    );
  }
}
