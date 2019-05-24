import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { editevent, deleteEvent } from './actions'

import Login from './components/Login';
import SignUp from './components/SignUp';
import DashBoard from './components/DashBoard';
import NewEvent from './components/NewEvent';
import ExperienceEvents from './components/ExperienceEvents';
import EditForm from './components/EditForm';
// import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import PrivateRoute from './components/PrivateRoute';

function App({ activeCard, editevent, deleteEvent }) {
  // console.log(deleteEvent)


  return (

    <div className="App">
      <nav>
        <h1 className="logo-style">MomDate</h1>
        <div className="nav-links">
          {(localStorage.getItem('token')) && 
          (<div>
          <Link to="/dashboard">
          <i className="fas fa-city"></i>
          </Link> 
          <Link to="/events">
          <i className="fas fa-calendar"></i>
          </Link>
          <Link to="/search">
          <i className="fas fa-search"></i>
          </Link>
          </div>
          )
        }
          <Link to="/">
          
          </Link>
          <Link to="/dashboard">
            <i className="far fa-user-circle"></i>
          </Link>
          {/* <Link to="/login">
          Log In
          </Link> */}
        </div>
      </nav>
      <Route exact path="/" component={SignUp} />
      <PrivateRoute exact path= "/dashboard" component={DashBoard} />
      <Route path="/login" component={Login} />
      <Route path="/experience/:id" render={ props => <ExperienceEvents {...props} event={activeCard} editevent={editevent} deleteEvent={deleteEvent} /> } />
      <Route exact path= "/events" component={NewEvent} />
      <Route exact path="/search" component={SearchBar} />
      <Route path="/editevent" component={EditForm} />
    </div>
  );
}

const mapStateToProps = ({activeCard}) => ({activeCard})


export default withRouter(connect(mapStateToProps, { editevent, deleteEvent })(App));
