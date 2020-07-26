import React, { Component } from 'react'
import './ticTac.css'

class TicTac extends Component {
    state = {
        count:0
    }
    clearField = () => {
            var start = document.getElementsByTagName('p');
                for (var i = 0; i < 9; ++i) {
                    var item = start[i];
                    if(item.style.display === "flex"){
                        item.style.display= "none";
                    }
                    else{
                        item.style.display= "none";
                    }
                }
            }

    resetField = () =>{
        var start = document.getElementsByTagName('p');
                for (var i = 0; i < 9; ++i) {
                    var item = start[i];
                    item.innerHTML ="x"
                    item.style.display = "flex"
                    this.setState({
                        count: 0
                    });
                }
    }

    changeValue = (index) =>{
        index= parseInt(index);

        var change = document.getElementsByTagName('p')[index];

            if((change.style.display === "none") && ((this.state.count)%2 === 0)){
                change.style.display = "flex"
                this.setState({
                    count: this.state.count+1
                });
            }
            else if ((change.style.display === "none") && ((this.state.count)%2 === 1)) {
                document.getElementsByTagName('p')[index].innerHTML = "o";
                change.style.display = "flex"
                this.setState({
                    count: this.state.count+1
                });
            } else {
                document.getElementsByTagName('p')[index].innerHTML = "x";
                this.setState({
                    count: this.state.count+1
                });
            }
    }


    render() {
        return (
            <div className="main">
                <div className="play-area">
                    <div id="first" className="column" onClick={() => this.changeValue('0')}><p>X</p></div>
                    <div id="second" className="column" onClick={() => this.changeValue('1')}><p>X</p></div>
                    <div id="third" className="column" onClick={() => this.changeValue('2')}><p>X</p></div>
                    <div id="fourth" className="column" onClick={() => this.changeValue('3')}><p>X</p></div>
                    <div id="fifth" className="column" onClick={() => this.changeValue('4')}><p>X</p></div>
                    <div id="sixth" className="column" onClick={() => this.changeValue('5')}><p>X</p></div>
                    <div id="seventh" className="column" onClick={() => this.changeValue('6')}><p>X</p></div>
                    <div id="eighth" className="column" onClick={() => this.changeValue('7')}><p>X</p></div>
                    <div id="ninth" className="column" onClick={() => this.changeValue('8')}><p>X</p></div>
                </div>
                <div className="buttons">
                    <div>
                        <button className="start" onClick={this.clearField}>Start</button>
                    </div>
                    <div>
                        <button className="reset" onClick={this.resetField}>Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TicTac;
