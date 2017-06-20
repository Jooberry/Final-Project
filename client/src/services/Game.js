class Game {

  constructor(canvasWrapper) {
    this.canvasWrapper = canvasWrapper;
  }

  start() {

      createjs.Ticker.setFPS(24);

      let x = Math.round(Math.random() * 1150) - 50;
      let y = Math.round(Math.random() * 480) - 50;

      const images = ['/images/Tony.png', '/images/Alex.png', '/images/Craig.png', '/images/Darren.png', '/images/Harrison.png', '/images/John.png', '/images/Sandy.png', '/images/Sian.png', '/images/Wojtek.png', '/images/Zsolt.png']

      const image = new Image();
      image.src = images[Math.floor(Math.random()*images.length)];

      const bitmap = new createjs.Bitmap(image);
      bitmap.alpha = 0;
      bitmap.x = x;
      bitmap.y = y;
      bitmap.scaleX = 0.5;
      bitmap.scaleY = 0.5;

      this.canvasWrapper.addChild(bitmap);
      const tween = createjs.Tween.get(bitmap, { loop: false })
        .to({ alpha: 1 }, 1500, createjs.Ease.getPowInOut(2))
        .to({ alpha: 0 }, 1500, createjs.Ease.getPowInOut(2))
       .call(this.handleComplete.bind(this));

      createjs.Ticker.addEventListener("tick", this.canvasWrapper.getCanvas());

      bitmap.addEventListener("click", (event) => {
        this.canvasWrapper.removeChild(bitmap);
        this.canvasWrapper.update();

      // const circle = this.canvasWrapper.createShape();

      // circle.graphics.beginFill("blue").drawCircle(x, y, 30);
      // circle.x = circle.y = 50;
      // circle.alpha = 0;
      // this.canvasWrapper.addChild(circle);
      // const tween = createjs.Tween.get(circle, { loop: false })
      //   .to({ alpha: 1 }, 1500, createjs.Ease.getPowInOut(2))
      //   .to({ alpha: 0 }, 1500, createjs.Ease.getPowInOut(2))
      //   .call(this.handleComplete.bind(this));

      // createjs.Ticker.addEventListener("tick", this.canvasWrapper.getCanvas());

      // circle.addEventListener("click", (event) => {
      //   this.canvasWrapper.removeChild(circle);
      //   this.canvasWrapper.update();
      });

  }

  handleComplete() {

    createjs.Ticker.setFPS(24);

    let x = Math.round(Math.random() * 1150) - 50;
    let y = Math.round(Math.random() * 480) - 50;

    const images = ['/images/Tony.png', '/images/Alex.png', '/images/Craig.png', '/images/Darren.png', '/images/Harrison.png', '/images/John.png', '/images/Sandy.png', '/images/Sian.png', '/images/Wojtek.png', '/images/Zsolt.png']

    const image = new Image();
    image.src = images[Math.floor(Math.random()*images.length)];

    const bitmap = new createjs.Bitmap(image);
    bitmap.alpha = 0;
    bitmap.x = x;
    bitmap.y = y;
    bitmap.scaleX = 0.5;
    bitmap.scaleY = 0.5;

    this.canvasWrapper.addChild(bitmap);
    const tween = createjs.Tween.get(bitmap, { loop: false })
      .to({ alpha: 1 }, 1500, createjs.Ease.getPowInOut(2))
      .to({ alpha: 0 }, 1500, createjs.Ease.getPowInOut(2))
      .call(this.handleComplete.bind(this));

    createjs.Ticker.addEventListener("tick", this.canvasWrapper.getCanvas());

    bitmap.addEventListener("click", (event) => {
      this.canvasWrapper.removeChild(bitmap);
      this.canvasWrapper.update();
    });
  }



}

export default Game;