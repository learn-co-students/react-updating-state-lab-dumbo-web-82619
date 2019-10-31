import React, {Component} from 'react'

export default class DigitalClicker extends Component{
    constructor(){
        super()
        
    }

    state = {
        timesClicked: 0
    }
    handleClick = (evt) => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    render(){

        return(
         <button onClick={this.handleClick} >{this.state.timesClicked}</button>
        )
    }
}
