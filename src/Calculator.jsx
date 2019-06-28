import React from "react";
import Button from "./components/Button";


//TO ADD
//if + - * already added cannot add anymore these items
//cannot add + - * at the beginning
//make result appear after clicking on =

//operators = ["-", "+", "*"];

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topText: "0",
            value1: 0,
            value2: 0,
            operator: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleResult = this.handleResult.bind(this);

    }

        handleClick(event) {
            if (this.state.topText!="0" && this.state.topText.indexOf("+")!== -1) {
            this.setState (
                { 
                    topText: this.state.topText + event.target.value,
                    value1: Number(event.target.value)
                }   
            )
        }
        else this.setState (
            { topText: event.target.value }
        )
}

        handleResult() {
            let result = Number(this.state.value1) + this.state.operator + Number (this.state.value2);
            this.setState (
                { topText: result}
            )
        }

    render() {
        return (
            <div>
                <div>{this.state.topText}</div>
                <Button value="1" onClick={() => this.handleClick()}/>
                <button value="2" onClick={this.handleClick}>2</button>
                <button value="3" onClick={this.handleClick}>3</button>
                <button value="4" onClick={this.handleClick}>4</button>
                <button value="5" onClick={this.handleClick}>5</button>
                <button value="6" onClick={this.handleClick}>6</button>
                <button value="7" onClick={this.handleClick}>7</button>
                <button value="8" onClick={this.handleClick}>8</button>
                <button value="9" onClick={this.handleClick}>9</button>
                <button value="0" onClick={this.handleClick}>0</button>
                <button value="+" onClick={this.handleClick}>+</button>
                <button value="-" onClick={this.handleClick}>-</button>
                <button onClick={this.handleResult} >=</button>
            </div>
        )
}
}

export default Calculator