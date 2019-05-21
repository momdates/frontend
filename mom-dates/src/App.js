import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import SignUp from './components/SignUp';
import DashBoard from './components/DashBoard';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <h1 className="logo-style">MomDate</h1>
        <div className="nav-links">
          <Link to="/">
            Sign Up Icon
          </Link>
          <Link to="/dashboard">
            User Dashboard Icon
          </Link>
          <Link to="/login">
          Log In
          </Link>
        </div>
      </nav>
      <Route exact path="/" component={SignUp} />
      <Route path= "/dashboard" component={DashBoard} />
      <Route path="/login" component={Login} />
    </div>
    </Router>
  );
}

export default App;
