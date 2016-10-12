import React, { Component } from 'react';
import NavBar from './NavBar';
import Home from './home/Home';
import Home2 from './home/Home2';

export default class App extends Component {
  constructor(props) {
    super(props)
    console.log('App', this.props)
    this.findRegion();
  }

  findRegion(ip) {
    fetch('https://ipapi.co/json/').then(res=> res.json())
      .then(data=> localStorage.setItem('region', data.region))
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
        { this.props.location.pathname === '/' ?
          <Home2 />
          :
          null }
      </div>
    )
  }
}