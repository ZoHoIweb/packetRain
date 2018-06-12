import Mock from 'mockjs';
import {output, queryString} from '../help';

Mock.mock(/mock.postComPic/, request => {
  const params = queryString(request.url);
  return output({
    imgUrl: 'www.baidu.com',
  });
});

