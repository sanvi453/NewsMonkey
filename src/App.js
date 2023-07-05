//Your NEWS API key is: da1cf4440d754f2c9c76fad09b779f49
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize = {15}/>
      </div>
    )
  }
}
