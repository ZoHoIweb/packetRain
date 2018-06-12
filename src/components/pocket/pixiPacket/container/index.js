
import * as PIXI from 'pixi.js';
import FrameList from '../../frameList';
// import {FRAMES, ALLIMGS} from 'common/const';
import {FRAMES1, FRAMES2, PACKETS} from 'common/const';

export default class OneContainer {
  constructor(props) {

    this.Container = PIXI.Container;
    this.loader = PIXI.loader;
    this.resources = PIXI.loader.resources;
    this.Sprite = PIXI.Sprite;



    this.packets = new this.Container();
    let pac = new this.Sprite(this.resources[props.item.url].texture);

    pac.width = props.item.width;
    pac.height = props.item.height;
    pac.rotation = props.item.xulie === 0 ? this.randomPos('', 1, 10) : 5.5; // 金币旋转角度随机
    pac.x = this.randomPos('x', 8, 12);
    pac.y = this.randomPos('y', 7, 12);

    pac.interactive = true;
    pac.on('pointerdown', () => {
      // pac.visible = false;
      props.addIndex(); // 记录点击次数
      if (props.item.isClick) { // 是否可点击
        this.pixiFrame(props.item.xulie); // 添加序列帧
        this.packets.removeChild(pac);
      }

    });

    this.packets.addChild(pac);

    props.App.ticker.add(() => { // 控制红包速度
      this.packets.x -= 1000 / props.item.width; // 得到的是2,1.6,1.4这种数
      this.packets.y -= 1428 / props.item.height;
    });

  }

  pixiFrame = (xulie) => {

    let list = xulie === 1 ? FRAMES1 : FRAMES2;
    let frameList = new FrameList({
      list: list.map(item => item.url),
      loop: false,
      width: this.packets.children[0].width,
      height: this.packets.children[0].height,
      left: this.packets.children[0].x,
      top: this.packets.children[0].y,
      speed: 0.2,
      // onStop: this.props.onTransitionEnd,
      // onComplete: () => this.completePlay(ind),
      onComplete: () => this.packets.removeChild(frameList),

    });

    frameList.interactive = true;
    frameList.on('pointerdown', () => {
      // console.log('点我没效果哦');
    });

    this.packets.addChild(frameList);

  };

  randomPos = (xy, min, max) => {
    if (xy === 'x') return (Math.random() * (max - min) + min) * 108;
    if (xy === 'y') return (Math.random() * (max - min) + min) * 192;
    if (xy === '') return Math.random() * (max - min) + min;
  };



}
