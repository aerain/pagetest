import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';

import Home from './views/Home';
import Detail from './views/Detail';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => this.authroizeKaKao();

  authroizeKaKao = async () => {
    const APP_KEY = 'a6728ccac409bd094bb858d9118e121f';
    window.Kakao.init(APP_KEY);
    window.Kakao.Auth.createLoginButton({
      container: '.login-button',
      success: function(authObj) {
        console.log(Link);
        alert(JSON.stringify(authObj));
      },
      fail: function(err) {
         alert(JSON.stringify(err));
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <div className="login-button"></div>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Link 
              to="/">
              살려줘
            </Link>
            <Link to="/about">야</Link>
            <Route 
              exact
              path="/"
              component={Home}
            />
            <Route 
              path="/about"
              component={Detail}
            />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
