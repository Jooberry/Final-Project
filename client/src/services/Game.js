class Game {

  constructor(canvasWrapper) {
    this.canvasWrapper = canvasWrapper;
  }

  start() {

    let x = 5;
    let y = 5;

    setInterval(() => {

      const circle = this.canvasWrapper.createShape();

      circle.graphics.beginFill("blue").drawCircle(x, y, 30);
      circle.x = circle.y = 50;
      this.canvasWrapper.addChild(circle);
      this.canvasWrapper.update();

      circle.addEventListener("click", (event) => {
        this.canvasWrapper.removeAllChildren();
        this.canvasWrapper.update();
      });

      x += Math.round(Math.random() * 250) + 1;
      y += Math.round(Math.random() * 250) + 1;

    }, 2000)

  }

}

export default Game;