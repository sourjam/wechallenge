import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class NavBar extends Component {
  //if user is authenticated, show "sign out" & "profile" on nav bar
  renderLinks() {
    if(this.props.authenticated) {
      return [<li key={1}>
          <Link to="/signout" className="navbar-brand">Sign Out</Link>
      </li>,
      <li key={2}>
        <Link to="/profile" className="navbar-brand">Profile</Link>
      </li>
      ];
    } else {
    //if user is not authenticated, show "sign up" & "sign in" on nav bar
      return [
        <li key={3}>
          <Link to="/signup" className="navbar-brand"><span className="glyphicon glyphicon-user"></span>  Sign Up</Link>
        </li>,
         <li key={4}>
          <Link to="/signin" className="navbar-brand"><span className="glyphicon glyphicon-log-in"></span>  Sign In</Link>
        </li>
      ];
    }
  }
  //default nav bar view
  render () {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">weChallenge</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/" className="navbar-brand">Home</Link>
              </li>
              <li>
                <Link to="/challenges" className="navbar-brand">Challenges</Link>
              </li>
              <li>
                <Link to="/record" className="navbar-brand">Records</Link>
              </li>
              <li>
                <Link to="/submission" className="navbar-brand">Submit Challenge</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {this.renderLinks()}
            </ul>
          </div>
        </div>
      </nav>
      )
  }
}

//retrieving redux state.auth to check if user is authentciated
function mapStateToProps(state) {
  return{
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(NavBar);

