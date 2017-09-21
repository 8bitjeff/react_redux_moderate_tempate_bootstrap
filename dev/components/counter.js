import React from 'react';

class Counter extends React.Component {
    render(){
    
        return(
        <div className="container fluid main">
            <h1 className="title">Moderate Stateful Redux React Counter with Bootstrap</h1>
            <h1>{this.props.value}</h1>
            <button onClick={this.props.onIncrement} className="btn btn-primary">ADD</button>
            &nbsp;
            <button onClick={this.props.onDecrement} className="btn btn-secondary">Subtract</button>
        </div>
        )
    }
}

export default Counter
