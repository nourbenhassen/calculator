import React from "react";
import Button from "./components/Button";

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topText: "0"
        }
        this.handleClick = this.handleClick.bind(this);

    }

        handleClick(event) {
            this.setState({ topText: event.target.value })
        }

    render() {
        return (
            <div>
                <div>{this.state.topText}</div>
                <Button value='1' onClick={this.handleClick}/>
                <Button value="2"/>
                <Button value="3"/>
                <Button value="4"/>
                <Button value="5"/>
                <Button value="6"/>
                <Button value="7"/>
                <Button value="8"/>
                <Button value="9"/>
                <Button value="0"/>
                <button value="XX" onClick={this.handleClick}>XX</button>
            </div>
        )
}
}

export default Calculator