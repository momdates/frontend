import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class EventSummary extends React.Component{
    state={
        blurb:'',
        expdesc:'',
        availability: ''
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
                        <Label for="blurb">Write a short blurb for the summary.</Label>
                        <Input
                        type="text"
                        name="blurb"
                        placeholder="Enter Summary Here"
                        onChange = {this.handleChanges}
                        value={this.state.blurb}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="expdesc">Details</Label>
                        <Input
                        type="textarea"
                        name="expdesc"
                        placeholder="Enter The Deets"
                        onChange = {this.handleChanges}
                        value={this.state.expdesc}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="availability">Availability</Label>
                        <Input
                        type="text"
                        name="availability"
                        placeholder="Enter spots available."
                        onChange = {this.handleChanges}
                        value={this.state.availability}
                        />
                    </FormGroup>
                        <Button className="button-style">Next</Button>
                    </Form>
                    </div>                    
                </div>
        )
    }
}