import React, { Component } from 'react';
import {connect} from 'react-redux'

import { increment, decrement } from '../actions'

/*
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
*/


class App extends Component{


  render(){
     const props = this.props;
      return (
      <React.Fragment>
        <div> value : {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
      )
  }
}

const mapStateToProps = state =>({value: state.count.value})
const mapDispatchToProps = dispatch =>({
  increment:() => dispatch(increment()),
  decrement:() => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
/*export default App;*/
