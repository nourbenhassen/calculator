import React from "react"

class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
        <button id={this.props.value}>{this.props.value}</button>
        )
    }
}


export default Button