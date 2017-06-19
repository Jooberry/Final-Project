class CanvasWrapper{

  constructor(divId) {
    this.stage = new createjs.Stage("canvas");
  }

  createShape() {
    return new createjs.Shape();
  }

  addChild(child) {
    this.stage.addChild(child);
  }

  update() {
    this.stage.update();
  }

  removeAllChildren() {
    this.stage.removeAllChildren();
  }

}

export default CanvasWrapper;