import React from 'react';
import PropTypes from 'prop-types';
import css from './index.less';

export default class Remark extends React.Component {
  static propsTypes = {};
  static defaultProps = {
    data: [
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
    ]
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSingleRemark = (item, index) => {
    const picMeta = typeof item.pic_meta === 'string' ? JSON.parse(item.pic_meta) : item.pic_meta;
    return (
      <article key={index}>
        <h5>{item.buyer_nick} </h5>
        <p>{item.description}</p>
        <section className={css.imgRowWrapper}>
          {
            picMeta.map((i, idx) => {
              const imgProps = {
                key: idx,
                src: `${i.pic}_q80_.webp`,
              };
              return (
                <img {...imgProps} />
              );
            })
          }
        </section>
      </article>
    );
  };

  render() {
    const {data} = this.props;
    return (
      <section className={css.remark}>
        <header>产品评价</header>
        <main>
          {
            data.map((i, idx) => {
              return this.renderSingleRemark(i, idx);
            })
          }
        </main>
      </section>
    );
  }
}
