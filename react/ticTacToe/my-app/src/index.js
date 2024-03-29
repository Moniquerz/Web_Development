import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Square extends React.Component {
  //adding a constructor to the class to initialize the state
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    //"square" passing in the value from the Board component
    return <button 
      className="square" 
      //tell it to re-render that Square whenever the button is clicked
      onClick={()=> this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>;
  }
}

class Board extends React.Component {
  //set the Board's initial state to contain an array of 9 nulls
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    //prop called value, will use this to pass data to Square Component
    return ( 
      <Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />
    );
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
