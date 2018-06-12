import React from 'react';
import PropTypes from 'prop-types';
import css from './index.less';

import Shader from './shader';
import Linear from './linear';
import Remark from './remark';
import LeftHead from './leftHead';

// import title from 'assert/img/title.png';

export default class Detail extends React.Component {
  static propsTypes = {};
  static defaultProps = {
    itemDetail: [
      {
        'goodsTaobaoId': '38824121898',
        'title': '品牌的力量！一切为了宝宝！为了宝宝的一切！为宝宝提前囤的货，3月份生产的，算是比较新的。',
        'picUrl': '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
        'price': '100',
        'customDescription': 'https://img.alicdn.com/imgextra/i4/2222906716/TB2hQerj98YBeNkSnb4XXaevFXa-2222906716.jpg',
        'buyShow': [
          {
            'picture': 'http://img01.daily.taobaocdn.net/tfscom/i2/15782035348358/TB2BadXXXXXXXXEXXXXXXXXXXXX_ !!2066955782-0-rate.jpg',
            'pic_meta': '[{"height":411,"pic":"https://img.alicdn.com/imgextra/i4/1862941194/TB2ER9mpVXXXXaCXXXXXXXXXXXX-1862941194.jpg","size":35522,"width":629},{"height":411,"pic":"https://img.alicdn.com/imgextra/i2/1862941194/TB2PVygpVXXXXbBXXXXXXXXXXXX-1862941194.jpg","size":35522,"width":629},{"height":411,"pic":"https://img.alicdn.com/imgextra/i2/1862941194/TB2t.9bpVXXXXbEXXXXXXXXXXXX-1862941194.jpg","size":35522,"width":629},{"height":411,"pic":"https://img.alicdn.com/imgextra/i1/1862941194/TB2GyXQpVXXXXbvXXXXXXXXXXXX-1862941194.jpg","size":35522,"width":629}]',
            'item_id': 1500017235792,
            'id': 123,
            'description': '第一条发货快发货快发货快发货快发货快发货快发货快发货快发货快发货快',
            'seller_id': 2065340343,
            'buyer_nick': '1r***1',
            'mix_buyer_nick': 'r01HKzPtEFlPg4MS+tnNmo7LrFFkqRzgY+65Ye6O+bVpZAu003d1',
            'buyer_stars': 12,
            'share_source': 0,
            'pv': 123,
            'status': 0,
            'tag_names': '女神',
            'comment': '非常好的评论'
          },
          {
            'picture': 'http://img01.daily.taobaocdn.net/tfscom/i2/15782035348358/TB2BadXXXXXXXXEXXXXXXXXXXXX_ !!2066955782-0-rate.jpg',
            'pic_meta': '[{"height":411,"pic":"https://img.alicdn.com/imgextra/i4/1862941194/TB2ER9mpVXXXXaCXXXXXXXXXXXX-1862941194.jpg","size":35522,"width":629},{"height":411,"pic":"https://img.alicdn.com/imgextra/i2/1862941194/TB2PVygpVXXXXbBXXXXXXXXXXXX-1862941194.jpg","size":35522,"width":629},{"height":411,"pic":"https://img.alicdn.com/imgextra/i2/1862941194/TB2t.9bpVXXXXbEXXXXXXXXXXXX-1862941194.jpg","size":35522,"width":629},{"height":411,"pic":"https://img.alicdn.com/imgextra/i1/1862941194/TB2GyXQpVXXXXbvXXXXXXXXXXXX-1862941194.jpg","size":35522,"width":629}]',
            'item_id': 1500017235792,
            'id': 123,
            'description': '第二条发货快发货快发货快发货快发货快发货快发货快发货快发货快发货快',
            'seller_id': 2065340343,
            'buyer_nick': '2r***1',
            'mix_buyer_nick': 'r01HKzPtEFlPg4MS+tnNmo7LrFFkqRzgY+65Ye6O+bVpZAu003d2',
            'buyer_stars': 12,
            'share_source': 0,
            'pv': 123,
            'status': 0,
            'tag_names': '女神',
            'comment': '非常好的评论'
          },
          {
            'picture': 'http://img01.daily.taobaocdn.net/tfscom/i2/15782035348358/TB2BadXXXXXXXXEXXXXXXXXXXXX_ !!2066955782-0-rate.jpg',
            'pic_meta': '[{"height":411,"pic":"https://img.alicdn.com/imgextra/i4/1862941194/TB2ER9mpVXXXXaCXXXXXXXXXXXX-1862941194.jpg","size":35522,"width":629},{"height":411,"pic":"https://img.alicdn.com/imgextra/i2/1862941194/TB2PVygpVXXXXbBXXXXXXXXXXXX-1862941194.jpg","size":35522,"width":629},{"height":411,"pic":"https://img.alicdn.com/imgextra/i2/1862941194/TB2t.9bpVXXXXbEXXXXXXXXXXXX-1862941194.jpg","size":35522,"width":629},{"height":411,"pic":"https://img.alicdn.com/imgextra/i1/1862941194/TB2GyXQpVXXXXbvXXXXXXXXXXXX-1862941194.jpg","size":35522,"width":629}]',
            'item_id': 1500017235792,
            'id': 123,
            'description': '第三第发货快发货快发货快发货快发货快发货快发货快发货快发货快发货快',
            'seller_id': 2065340343,
            'buyer_nick': '3r***1',
            'mix_buyer_nick': 'r01HKzPtEFlPg4MS+tnNmo7LrFFkqRzgY+65Ye6O+bVpZAu003d3',
            'buyer_stars': 12,
            'share_source': 0,
            'pv': 123,
            'status': 0,
            'tag_names': '女神',
            'comment': '非常好的评论'
          },
          {
            'picture': 'http://img01.daily.taobaocdn.net/tfscom/i2/15782035348358/TB2BadXXXXXXXXEXXXXXXXXXXXX_ !!2066955782-0-rate.jpg',
            'pic_meta': '[{"height":411,"pic":"https://img.alicdn.com/imgextra/i4/1862941194/TB2ER9mpVXXXXaCXXXXXXXXXXXX-1862941194.jpg","size":35522,"width":629},{"height":411,"pic":"https://img.alicdn.com/imgextra/i2/1862941194/TB2PVygpVXXXXbBXXXXXXXXXXXX-1862941194.jpg","size":35522,"width":629},{"height":411,"pic":"https://img.alicdn.com/imgextra/i2/1862941194/TB2t.9bpVXXXXbEXXXXXXXXXXXX-1862941194.jpg","size":35522,"width":629},{"height":411,"pic":"https://img.alicdn.com/imgextra/i1/1862941194/TB2GyXQpVXXXXbvXXXXXXXXXXXX-1862941194.jpg","size":35522,"width":629}]',
            'item_id': 1500017235792,
            'id': 123,
            'description': '第四条发货快发货快发货快发货快发货快发货快发货快发货快发货快发货快',
            'seller_id': 2065340343,
            'buyer_nick': '4r***1',
            'mix_buyer_nick': 'r01HKzPtEFlPg4MS+tnNmo7LrFFkqRzgY+65Ye6O+bVpZAu003d4',
            'buyer_stars': 12,
            'share_source': 0,
            'pv': 123,
            'status': 0,
            'tag_names': '女神',
            'comment': '非常好的评论'
          }
        ],
      },
      {
        'goodsTaobaoId': '38824457131',
        'title': 'Aptamil卓萃版 爱他美较大婴儿配方奶粉2段900g',
        'picUrl': '//img.alicdn.com/imgextra/i1/3355153118/TB2qsoyqk9WBuNjSspeXXaz5VXa-3355153118.png',
        'price': '222',
        'customDescription': 'https://img.alicdn.com/imgextra/i4/2222906716/TB2hQerj98YBeNkSnb4XXaevFXa-2222906716.jpg',
        'buyShow': [],
      },
      {
        'goodsTaobaoId': '38813687851',
        'title': '我是333',
        'picUrl': '//img.alicdn.com/imgextra/i3/3355153118/TB2nnEMqeySBuNjy1zdXXXPxFXa-3355153118.png',
        'price': '333',
        'customDescription': '',
        'buyShow': [],
      },
      {
        'goodsTaobaoId': '566683531640',
        'title': '我是44444',
        'picUrl': '//img.alicdn.com/imgextra/i3/3355153118/TB2nnEMqeySBuNjy1zdXXXPxFXa-3355153118.png',
        'price': '444',
        'customDescription': '',
        'buyShow': [],
      },
    ],
    detailsId: '38824121898',
  };

  constructor(props) {
    super(props);
    this.state = {

    };
    this.itemDetail = props.itemDetail.find( item => item.goodsTaobaoId === props.detailsId);


  }


  renderLeft = () => {
    const {itemDetail} = this;


    const leftHeadProps = {
      price: itemDetail && itemDetail.price || '',
      goodsTaobaoId: itemDetail && itemDetail.goodsTaobaoId || '',
      picUrl: itemDetail && itemDetail.picUrl || '',
      title: itemDetail && itemDetail.title || '',
    };
    const remarkProps = {
      data: itemDetail && (typeof itemDetail.buyShow === 'string' ? JSON.parse(itemDetail.buyShow) : itemDetail.buyShow) || [],
      // data: selectedItem && selectedItem.buyShow || [],
    };

    // console.log('23232', JSON.parse(selectedItem.buyShow));

    return (
      <div className={css.left}>
        <LeftHead {...leftHeadProps} />
        {
          remarkProps.data && remarkProps.data.length ? <Remark {...remarkProps}/> :
            <div className={css.noRemark}>暂无评价</div>
        }

      </div>
    );
  };

  renderRight = () => {
    const {itemDetail} = this;
    let rightImgs = itemDetail && itemDetail.customDescription.replace(/[;]|[；]|[，]/g, ',').split(',') || [];

    return (
      <div className={css.right}>
        {
          rightImgs.map((i, index) => (
            <img src={`${i}_q80_.webp`} key={index}/>
          ))
        }
      </div>
    );
  };

  render() {

    // const imgProps = {
    //   src: title,
    //   className: css.imgTitle,
    // };

    return (
      <Shader onClick={this.props.hidden}>
        <div className={css.wrapper}>
          {this.renderLeft()}
          {this.renderRight()}
        </div>
      </Shader>
    );
  }
}
