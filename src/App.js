import React, { Component } from 'react';



const App = () => { 
  return <Counter></Counter>
}


class Counter extends Component{

  constructor(props){
      super(props);
      this.state= {count:0}
  }

  handlePlusButton = ()=>{
    let count = this.state.count;
    this.setState({count: count + 1});
  }
  handleMinusButton = ()=>{
    let count = this.state.count;
    this.setState({count: count - 1});
  }
  

  render(){
      return (
      <React.Fragment>
        <div> count : {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
      )
  }
}


export default App;
