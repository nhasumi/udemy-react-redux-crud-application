
import React, { Component } from 'react';
import {connect} from 'react-redux'

import { readEvents} from '../actions'
import _ from 'lodash'
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


class EventsIndex extends Component{
  componentDidMount(){
    this.props.readEvents()
  }

renderEvents(){
  console.log(this.props.events)
  return _.map(this.props.events, event => (
    <tr key={event.id}>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
    </tr>
  ))
  
  }


  render(){
     
      return (
       <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
         {this.renderEvents()}
        </tbody>
       </table>
      )
  }
}

const mapStateToProps = state =>({events:state.events})
const mapDispatchToProps = dispatch =>({
  readEvents:() => dispatch(readEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
/*export default App;*/
