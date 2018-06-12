import * as PIXI from 'pixi.js';
// import {FRAMES, ALLIMGS} from 'common/const';
import {FRAMES1, FRAMES2, PACKETS} from 'common/const';
// import ruleBg from 'assert/img/loading/ruleBg.png';

import OneContainer from './container';

export default class PixiPacket {

  constructor() {
    this.Application = PIXI.Application;
    this.Container = PIXI.Container;
    this.loader = PIXI.loader;
    this.resources = PIXI.loader.resources;
    this.TextureCache = PIXI.utils.TextureCache;
    this.Sprite = PIXI.Sprite;
    this.Rectangle = PIXI.Rectangle;

    this.app = new this.Application({
      width: 1080,
      height: 1920,
      transparent: true,
      // backgroundColor: 0xcccccc,
      antialias: true,
      resolution: 1
    });

    this.num = 0;

    // console.log('PIXI.loader.resources', PIXI.loader.resources);

    this.setup();

  }

  setup = () => {

    // 清空stage
    if (this.app.stage.children.length) {
      this.app.stage.removeChildren(0, this.app.stage.children.length);
    }

    PACKETS.map( (item, index) => {
      const mod = new OneContainer({index: index, item: item, App: this.app, addIndex: this.addIndex.bind(this)});

      this.app.stage.addChild(mod.packets);

      return mod;
    });

  };

  addIndex = () => {

    // 点击图片出对应的数字图片
    this.num = this.num + 1;
    // console.log('this.num==', this.num);

    this.numImg = null;
    this.app.stage.removeChild(this.numImg);

    this.numImg = new this.Sprite(this.resources[PACKETS[this.num - 1].url].texture);
    this.numImg.width = 100;
    this.numImg.height = 100;
    this.numImg.x = 100;
    this.numImg.y = 100;

    this.app.stage.addChild(this.numImg);
  };





};
