import React from 'react';
import { Button, ButtonGroup, Form, FormGroup, Label, Input} from 'reactstrap';

export default class EventForm extends React.Component{
    state={
        title: '',
        explocation: ''
    }
    
    handleChanges= e => {
        e.preventDefault();
        this.setState({
           [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    }

    render(){
        return(
                <div>
                    <div className="signup-form">
                    <h1>New Event</h1>
                    <Form className="form" onSubmit={this.onSubmit} >
                    <FormGroup>
                        <Label for="title">Name of event</Label>
                        <Input
                        type="text"
                        name="title"
                        placeholder="Enter Your Event Name"
                        onChange = {this.handleChanges}
                        value={this.state.title}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="location">Location</Label>
                        <Input
                        type="text"
                        name="explocation"
                        placeholder="Enter Your Event Location"
                        onChange = {this.handleChanges}
                        value={this.state.explocation}
                        />
                    </FormGroup>
                    <ButtonGroup>
                        <Button className="kids">Kid Free</Button>
                        <Button className="kids">Kid Friendly</Button>
                        <Button>Select Dates</Button>
                    </ButtonGroup>
                        <Button className="button-style">Sign Up</Button>
                    </Form>
                    </div>
                </div>
        )
    }
}
