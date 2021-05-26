
import './App.css';
import './components/header'
import "antd/dist/antd.css";
import Header from './components/header';
import Content from './components/content'
import React from 'react';
class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Content/>
      

      </div>
    )
  }
}

export default App;
