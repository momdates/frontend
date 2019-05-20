import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { signup } from '../actions'

class SignUp extends Component{
   state = {
       credentials: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
       }
    
   }

    handleChanges = e => {
        this.setState({
            ...this.state.credentials,
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <div className="signup-form">
                <h1>We're happy to have you.</h1>
                <Form className="form" onSubmit={this.signup}>
                <FormGroup>
                    <Label for="first-name">First Name</Label>
                    <Input
                    type="text"
                    name="first-name"
                    placeholder="Enter Your First Name"
                    onChange={this.handleChanges}
                    value={this.state.credentials.first_name}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="last-name">Last Name</Label>
                    <Input
                    type="text"
                    name="last-name"
                    placeholder="Enter Your Last Name"
                    onChange={this.handleChanges}
                    value={this.state.credentials.last_name}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                    type="text"
                    name="email"
                    placeholder="Enter Your Email Address"
                    onChange={this.handleChanges}
                    value={this.state.credentials.email}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                    type="text"
                    name="password"
                    placeholder="Create Password"
                    onChange={this.handleChanges}
                    value={this.state.credentials.password}
                    />
                </FormGroup>
                    <Button className="button-style">Sign Up</Button>
                </Form>
                <h6>or</h6>
                </div>
                <div className="signup-buttons">
                    <Button color="primary">Sign In With Facebook</Button>
                    <Button>Sign In With Gmail</Button>
                    <h6>Already have an account?</h6>
                    <Button>Sign In</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ signingUp }) => ({
    signingUp
})

export default connect(
    mapStateToProps,
    { signup }
)(SignUp);