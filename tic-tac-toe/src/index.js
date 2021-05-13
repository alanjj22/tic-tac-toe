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
      if(square[a] === square[b] && square[a] === square[c]){
        return square[a];
      }
    }
    return null;
}

class Board extends React.Component { 

  handleClick(i){
  
    const History = this.state.History;
    const current = History[History.length-1];
    const squares = current.square.slice();
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    const XisTrue = this.state.XisTrue;
    squares[i]=(XisTrue ? "X" : "O");
    console.log(i);
    this.setState({
      History:History.cocat([{squares:squares}]),
      XisTrue:!this.state.XisTrue
    })
  }

  renderSquare(i) {
    return <Square value={this.props.square[i]} onClick={()=>this.props.handleClick(i)}/>;
  }

  render() {
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
  constructor(props){
    super(props);
    this.state={
      History: [{ square: Array(9).fill(null)}],
      XisTrue: true,
    }
  }

  render() {
    const History = this.state.History;
    const current = History[History.length-1];
    const winner = calculateWinner(current.square);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if(winner){
      status = 'Winner is: '+ winner;
    }
    else{
      status = 'Next player: '+ (this.state.XisTrue ? "X" : "O");
    }


    return (
      <div className="game">
        <div className="game-board">
          <Board square={current.square}
          onClick={(i)=>this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
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
