class Game {

  constructor(canvasWrapper) {
    this.canvasWrapper = canvasWrapper;
  }

  start() {

      createjs.Ticker.setFPS(24);

      let x = Math.round(Math.random() * 1150) - 50;
      let y = Math.round(Math.random() * 460) - 50;

      const images = ['/images/Tony.png', '/images/Alex.png', '/images/Craig.png', '/images/Darren.png', '/images/Harrison.png', '/images/John.png', '/images/Sandy.png', '/images/Sian.png', '/images/Wojtek.png', '/images/Zsolt.png', '/images/Allegra.png', '/images/Andrew.png', '/images/Ben.png', '/images/Bill.png', '/images/Caroline.png', '/images/David.png', '/images/Dominic.png', '/images/Duncan.png', '/images/Eden.png', '/images/Euan.png', '/images/Ian.png', '/images/James.png', '/images/Joo.png', '/images/Michael.png', '/images/Rajini.png', '/images/Reece.png', '/images/Rhys.png', '/images/Tristan.png']

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

  handleComplete() {

    createjs.Ticker.setFPS(24);

    let x = Math.round(Math.random() * 1150) - 50;
    let y = Math.round(Math.random() * 460) - 50;

    const images = ['/images/Tony.png', '/images/Alex.png', '/images/Craig.png', '/images/Darren.png', '/images/Harrison.png', '/images/John.png', '/images/Sandy.png', '/images/Sian.png', '/images/Wojtek.png', '/images/Zsolt.png', '/images/Allegra.png', '/images/Andrew.png', '/images/Ben.png', '/images/Bill.png', '/images/Caroline.png', '/images/David.png', '/images/Dominic.png', '/images/Duncan.png', '/images/Eden.png', '/images/Euan.png', '/images/Ian.png', '/images/James.png', '/images/Joo.png', '/images/Michael.png', '/images/Rajini.png', '/images/Reece.png', '/images/Rhys.png', '/images/Tristan.png']

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