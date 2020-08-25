import React, { Component } from 'react'
import './ticTac.css'

class TicTac extends Component {
    state = {
        board : Array(9).fill(null) ,
        player : "X"
    }

    playGame = (index) =>{
        let newBoard = this.state.board;
        if(this.state.board[index]===null){
            newBoard[index] = this.state.player;
            let newPlayer = this.state.player === "X" ? "O" : "X" ;
        this.setState({
            board : newBoard,
            player : newPlayer
        })
        }
    }
    render() {
    const Box = this.state.board.map((box,index) => <div className="square" key={index} onClick={()=>this.playGame(index)}>{box}</div>)
        return (
            <div className="container">
                <h2>Tic-Tac-Toe</h2>
                <div className="board">
                    {Box}
                </div>
            </div>
        )
    }
}
export default TicTac;