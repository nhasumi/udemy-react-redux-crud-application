import React, { Component } from 'react';



const App = () => {
  const profiles =[
      {name:"Taro", age:10},
      {name:"Hanako", age:5}
    ]

  return (
  <div>
    {
      profiles.map((profile,index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })
    }
  </div>
  )
}

const User =(props) => {
  return <div> Hi, Iam {props.name} ,and  {props.age}years old</div>
}

export default App;
