import React from 'react';

class GameContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      context: null
    };
  }

  componentDidMount() {
    const context = this.refs.canvasid.getContext('2d');
    this.setState({context: context}, () => {
        setInterval(this.update, 2000);
    });
  }

  update() {
    console.log("draw circle");

  }

  render() {
    return (
      <div>
        <canvas id="canvas" ref="canvasid" width="640" height="580" >
        </canvas>
      </div>
    );
  }

}

export default GameContainer;