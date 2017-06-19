class Game {

  constructor(canvasWrapper) {
    this.canvasWrapper = canvasWrapper;
  }

  start() {
      createjs.Ticker.setFPS(24);

      let x = Math.round(Math.random() * 500) + 1;
      let y = Math.round(Math.random() * 500) + 1;

      const circle = this.canvasWrapper.createShape();

      circle.graphics.beginFill("blue").drawCircle(x, y, 30);
      circle.x = circle.y = 50;
      circle.alpha = 0;
      this.canvasWrapper.addChild(circle);
      const tween = createjs.Tween.get(circle, { loop: false })
        .to({ alpha: 1 }, 1500, createjs.Ease.getPowInOut(2))
        .to({ alpha: 0 }, 1500, createjs.Ease.getPowInOut(2))
        .call(this.handleComplete.bind(this));




      createjs.Ticker.addEventListener("tick", this.canvasWrapper.getCanvas());

      circle.addEventListener("click", (event) => {
        this.canvasWrapper.removeChild(circle);
        this.canvasWrapper.update();
      });

  }

  handleComplete() {
    let x = Math.round(Math.random() * 500) + 1;
    let y = Math.round(Math.random() * 500) + 1;

    const circle = this.canvasWrapper.createShape();

    circle.graphics.beginFill("blue").drawCircle(x, y, 30);
    circle.x = circle.y = 50;
    circle.alpha = 0;
    this.canvasWrapper.addChild(circle);
    const tween = createjs.Tween.get(circle, { loop: false })
      .to({ alpha: 1 }, 1500, createjs.Ease.getPowInOut(2))
      .to({ alpha: 0 }, 1500, createjs.Ease.getPowInOut(2))
      .call(this.handleComplete.bind(this));

      circle.addEventListener("click", (event) => {
        this.canvasWrapper.removeChild(circle);
        this.canvasWrapper.update();
      });
  }



}

export default Game;