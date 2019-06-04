import React, { Component } from 'react';

export default class Cell extends Component {

    state = {
        color: this.props.value
    }


    render () {
        // console.log("props:", this.props)
        return (
            <div className="cell" key="color" style={{backgroundColor: this.state.color}} onClick={() => this.setState( {color: '#333'} )}></div>
        )
    }
}