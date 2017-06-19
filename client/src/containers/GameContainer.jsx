import React from 'react';

class GameContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      context: null
    };
  }

  componentDidMount() {
    // const context = this.refs.gameCanvas.getContext('2d');
    // this.setState({context: context}, () => {
    //     setInterval(this.update, 2000);
    // });
    //Create a stage by getting a reference to the canvas
    const stage = new createjs.Stage("canvas");
    //Create a Shape DisplayObject.
    const circle = new createjs.Shape();
    circle.graphics.beginFill("blue").drawCircle(0, 0, 30);
    //Set position of Shape instance.
    circle.x = circle.y = 50;
    //Add Shape instance to stage display list.
    stage.addChild(circle);
    //Update stage will render next frame
    stage.update();

    circle.addEventListener("click", (event) => {
      console.log("clicked")
    });
  }

  // update() {
  //   console.log("draw circle");
  // }

  render() {
    return (
      <div>
        <canvas id="canvas" ref="gameCanvas" width="640" height="580" >
        </canvas>
      </div>
    );
  }

}

export default GameContainer;