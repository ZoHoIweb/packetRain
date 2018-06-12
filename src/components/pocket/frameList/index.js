

export default class FrameList {
  constructor({list, loop = true, ...other}) {

    let textures = list.map(item => {
      return new PIXI.Texture.fromFrame(item);
    });

    this.animatedSprite = new PIXI.extras.AnimatedSprite(textures);


    const { top = 0, left = 0, speed = 1 } = other;
    this.animatedSprite.x = left;
    this.animatedSprite.y = top;
    this.animatedSprite.loop = loop;
    this.animatedSprite.rotation = 5.5;

    if (other.width) this.animatedSprite.width = other.width;
    if (other.height) this.animatedSprite.height = other.height;

    this.animatedSprite.play();
    this.animatedSprite.animationSpeed = speed; // 播放速度

    this.animatedSprite.onComplete = other.onComplete; // 播放完成后调用的方法

    return this.animatedSprite;
  }
}
