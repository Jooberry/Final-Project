import React from 'react';
import CanvasWrapper from '../services/CanvasWrapper.jsx'
import Game from '../services/Game.js'

class GameContainer extends React.Component {

  componentDidMount() {
    // When not using EaselJS:
    // const context = this.refs.gameCanvas.getContext('2d');
    // this.setState({context: context}, () => {
    //     setInterval(this.update, 2000);
    // });
    
    const stage = new CanvasWrapper("canvas");
    const game = new Game(stage);
   
    game.start();

// Darren says don't write it like this: new Game(new CanvasWrapper("canvas")).start();
  }

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