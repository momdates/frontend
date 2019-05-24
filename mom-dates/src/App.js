import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

import Login from './components/Login';
import SignUp from './components/SignUp';
import DashBoard from './components/DashBoard';
import NewEvent from './components/NewEvent';
import ExperienceEvents from './components/ExperienceEvents';
// import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import PrivateRoute from './components/PrivateRoute';

function App({ activeCard }) {
  console.log(activeCard)
  return (

    <div className="App">
      <nav>
        <h1 className="logo-style">MomDate</h1>
        <div className="nav-links">
          {(localStorage.getItem('token')) && 
          (<div>
          <Link to="/dashboard">
          Neighborhood Icon
          </Link> 
          <Link to="/events">
          Messages Icon
          </Link>
          <Link to="/search">
          Search Icon
          </Link>

          </div>
          )
        }
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
      <PrivateRoute exact path= "/dashboard" component={DashBoard} />
      <Route path="/login" component={Login} />
      <Route path="/experience/:id" render={ props => <ExperienceEvents {...props} event={activeCard}  /> } />
      <Route exact path= "/events" component={NewEvent} />
      <Route exact path="/search" component={SearchBar} />
    </div>
  );
}

const mapStateToProps = ({activeCard}) => ({activeCard})


export default withRouter(connect(mapStateToProps, {})(App));
