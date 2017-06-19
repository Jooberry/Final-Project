class Game {

  constructor(canvasWrapper) {
    this.canvasWrapper = canvasWrapper;
  }

  start() {

    setInterval(() => {

      let x = Math.round(Math.random() * 500) + 1;
      let y = Math.round(Math.random() * 500) + 1;

      const circle = this.canvasWrapper.createShape();

      circle.graphics.beginFill("blue").drawCircle(x, y, 30);
      circle.x = circle.y = 50;
      this.canvasWrapper.addChild(circle);
      createjs.Tween.get(circle, { loop: true })
        .to({ alpha: 0 }, 0, createjs.Ease.getPowInOut(2))
        .to({ alpha: 1 }, 1500, createjs.Ease.getPowInOut(2))
        .to({ alpha: 0 }, 1500, createjs.Ease.getPowInOut(2));
      createjs.Ticker.setFPS(100);
      createjs.Ticker.addEventListener("tick", this.canvasWrapper.getCanvas());

      circle.addEventListener("click", (event) => {
        this.canvasWrapper.removeChild(circle);
        this.canvasWrapper.update();
      });

    }, 3000)

  }

}

export default Game;