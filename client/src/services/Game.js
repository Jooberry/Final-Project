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
      this.canvasWrapper.update();

      circle.addEventListener("click", (event) => {
        this.canvasWrapper.removeAllChildren();
        this.canvasWrapper.update();
      });

    }, 2000)

  }

}

export default Game;