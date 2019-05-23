import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { connect } from 'react-redux';

import { login } from '../actions';

class Login extends React.Component{
    state={
        credentials: {
            username:'',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    }

    login = e =>{
        e.preventDefault();
        this.props
        .login(this.state.credentials)
        .then(()=> this.props.history.push('/dashboard'));
    }

    render(){
        return(
            <div className="login-form">
                <div>
               <h1>Welcome back.</h1>
                    <Form className="form" onSubmit={this.login} >
                    <FormGroup>
                        <Label for="username">Email</Label>
                        <Input
                        type="text"
                        name="username"
                        placeholder="Enter Your Email Address"
                        onChange = {this.handleChange}
                        value={this.state.credentials.username}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                        type="password"
                        name="password"
                        placeholder="Enter Your Password"
                        onChange = {this.handleChange}
                        value={this.state.password}
                        />
                    </FormGroup>
                    <h6>forgot password?</h6>
                    <Button className="button-style">Sign In</Button> 
                    </Form>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = ({ loggingIn }) => ({
    loggingIn
})

export default connect(
    mapStateToProps,
    { login }
)(Login);