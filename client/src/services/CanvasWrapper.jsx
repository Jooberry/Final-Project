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

  removeChild(child) {
    this.stage.removeChild(child);
  }

  getCanvas(){
    return this.stage;
  }

}

export default CanvasWrapper;