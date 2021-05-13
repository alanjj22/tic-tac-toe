import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square (props){
  return(
    <button className="square" onClick={ props.onClick }>
        {props.value}
      </button>
  );
}

function calculateWinner (square) {
    const Line = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    for(let i=0; i<Line.length; i++){
      const [a,b,c] = Line[i];
      if(square[a] && square[a] === square[a] && square[b] === square[a] && square[c]){
        return square[a];
      }
    }
    return null;
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state={
      square:Array(9).fill(null),
      XisTrue:true
    }
  }

  

  handleClick(i){
  
    const squares = this.state.square.slice();
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    const XisTrue = this.state.XisTrue;
    squares[i]=(XisTrue ? "X" : "O");
    console.log(i);
    this.setState({
      square:squares,
      XisTrue:!this.state.XisTrue
    })
  }

  renderSquare(i) {
    return <Square value={this.state.square[i]} onClick={()=>this.handleClick(i)}/>;
  }

  render() {
    const winner = calculateWinner(this.state.square);
    let status
    if(winner){
      status = 'Winner is: '+ winner;
    }
    else{
      status = 'Next player: '+ (this.state.XisTrue ? "X" : "O");
    }

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

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
