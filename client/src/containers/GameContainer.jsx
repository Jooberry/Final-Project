import React from 'react';
import CanvasWrapper from '../services/CanvasWrapper.jsx'
import Game from '../services/Game.js'

class GameContainer extends React.Component {

  componentDidMount() {

    const stage = new CanvasWrapper("canvas");
    const game = new Game(stage);
   
    game.start();

// Darren says don't write it like this: new Game(new CanvasWrapper("canvas")).start();
  }

  render() {
    return (
      <div>
        <canvas id="canvas" ref="gameCanvas" width="1263" height="590" >
        </canvas>
      </div>
    );
  }

}

export default GameContainer;