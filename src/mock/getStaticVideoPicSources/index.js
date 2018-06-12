import Mock from 'mockjs';
import {output, queryString} from '../help';


Mock.mock(/mock.getStaticVideoPicSources/, request => {
  const params = queryString(request.url);
  console.log(params);
  return output({
    list: [{
      children: [
        {
          name: '拖把系列',
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
              title: '333',
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
          name: '一次性用品',
          goods: [
            {
              goodsTaobaoId: '38824121898',
              picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
              title: '333',
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
          name: '卫浴用品',
          goods: [
            {
              goodsTaobaoId: '38824121898',
              picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
              title: '333',
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
            {
              goodsTaobaoId: '38824121898',
              picUrl: '//img.alicdn.com/imgextra/i4/3355153118/TB2lIH6qgaTBuNjSszfXXXgfpXa-3355153118.png',
              title: '333',
              price: '198.00',
              soldQuantity: '123465',
            },
          ],
        },
      ],
    }],
  });
});
