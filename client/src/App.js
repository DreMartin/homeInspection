import React, { Component } from 'react';
import Auth from './auth/Auth';
import SiteBar from './home/Navbar';
import Splash from './home/Splash';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: '',
      // userData: '',
    }

    this.setSessionState = this.setSessionState.bind(this);
    this.protectedViews = this.protectedViews.bind(this);
    // this.setUserState = this.setUserState.bind(this);
    this.logout = this.logout.bind(this);
  }

  setSessionState(token) {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });

  }

  // setUserState(user) {
  //   localStorage.setItem('userData', user)
  //   this.setState({userData: user })
  //   console.log(userData);
  // }

  componentWillMount() {
    const token = localStorage.getItem('token')

    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  logout() {
    this.setState({ sessionToken: '' });
    localStorage.removeItem('token');
  }

  protectedViews() {

    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Route path='/' exact={true}>
          <Splash sessionToken={this.state.sessionToken} />
        </Route>
      )
    } else {
      return (
        <Route path="/auth" exact={true} >
          <Auth setToken={this.setSessionState} />
        </Route>
      )
    }

  }

  render() {
    return (
        <Router>
          <div>
            <SiteBar clickLogout={this.logout} />
            {this.protectedViews()}
          </div>
        </Router>


    );
  }
}

export default App;
