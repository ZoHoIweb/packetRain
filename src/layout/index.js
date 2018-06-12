import React from 'react';
import classnames from 'classnames';
import css from './index.less';
import Ajax from 'utils/ajax';

// 页面组件写在下面
import Pocket from 'components/pocket';
import Page from 'components/page';
import {addRes} from 'common/const/assetResources';
import * as PIXI from "pixi.js";


let INTERVAL = 1000 * 60 * 3;
if (__DEV__) {
  INTERVAL = 1000 * 60 * 6;
}

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClearTimer, false);
    document.removeEventListener('touchstart', this.onClearTimer, false);
    clearTimeout(this.timer);
    this.timer = null;
  }

  componentDidMount() {
    // window.CFG.token = this.getQueryString('token');
    this.initData();
    // document.addEventListener('click', this.onClearTimer, false);
    // document.addEventListener('touchstart', this.onClearTimer, false);
    // this.timer = setTimeout(this.goHome, INTERVAL);

    this.loader();


  }

  loader = async () => {

    let resource = await addRes('img');
    PIXI.loader
      .add(resource)
      .load((loader, resources) => {
        console.log('加载完毕');
        // console.log('resources', resources);
      //  只一次生成需要处理的加载好的图片资源，而不是每次都loader，那样会报错
      //   this.packetImgs = PIXI.loader.resources;
        // console.log('this.packetImgs', this.packetImgs);
      });
  };

  getQueryString(name) {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
    const r = window.location.search.substr(1).match(reg);
    if (r !== null) return r[2];
    return null;
  }

  // 拉取数据的方法：
  async initData() {
    const {list: details} = await Ajax.req({url: 'xuanshi.getDetails'});
    // console.log(' details', details);


    // console.log(' itemDetail', itemDetail);
    this.setState({
      itemDetail: details,
      route: 'Page',
    });
  }

  goHome = () => {
    if (this.state.route !== 'Page') {
      this.switchRoute('Page');
    } else {
      this.onClearTimer();
    }
  };

  onClearTimer = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(this.goHome, INTERVAL);
  };


  switchRoute = (route) => {
    console.log('route', route);
    this.setState({
      route: route,
    });
  };

  // 视图

  renderPage = () => {
    const {itemDetail} = this.state;
    const props = {
      switchRoute: this.switchRoute,
      itemDetail,
    };
    return <Page {...props}/>;
  };


  renderRoute = () => {
    switch (this.state.route) {
      case 'Page': {
        return this.renderPage();
      }
      default : {
        return null;
      }
    }
  };

  render() {
    const cls = classnames([css.layout]);

    return (
      <div className={cls}>
        {this.renderRoute()}
      </div>
    );
  }
}

export default Layout;
