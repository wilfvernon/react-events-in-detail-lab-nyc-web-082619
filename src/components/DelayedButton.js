import React from 'react'

export default class DelayedButton extends React.Component {

    handleClick = (e) => {
        e.persist()
        setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay);
        
    }

    render(){
       return <button onClick={event => this.handleClick(event)}>Delayed Button</button>
    }
}