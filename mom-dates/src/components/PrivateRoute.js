import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({
    component: Component,
    token,
    errorStatusCode, 
    ...rest
}) => {
    return (
        <Route
        {...rest}
        render ={props =>
        (localStorage.getItem('token')) ? (
            <Component {...props} />
        ) : (
            <Redirect to="/login" />
        )
        }
        />
    );
};

export default PrivateRoute;

// const mapStateToProps = ({ token, errorStatusCode }) => ({
//     errorStatusCode,
//     token
// });

// export default withRouter(
//     connect(
//         mapStateToProps,
//         {}
//     )(PrivateRoute)
// );