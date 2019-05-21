import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

export class SignUpForm extends React.Component{
    state={
        name: '',
        email:'',
        password:''
    }
    
    handleChanges= e => {
        e.preventDefault();
        this.setState({
           [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({signUpForm:this.state})
    }

    render(){
        return(
                <div>
                    <div className="signup-form">
                    <h1>We're happy to have you.</h1>
                    <Form className="form" onSubmit={this.onSubmit} >
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        onChange = {this.handleChanges}
                        value={this.state.name}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                        type="text"
                        name="email"
                        placeholder="Enter Your Email Address"
                        onChange = {this.handleChanges}
                        value={this.state.email}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                        type="password"
                        name="password"
                        placeholder="Create Password"
                        onChange = {this.handleChanges}
                        value={this.state.password}
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
                        <Button>Sign In </Button>
                    </div>
                </div>
        )
    }
}