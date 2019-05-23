import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class EventPhoto extends React.Component{
    state={
        expimgurl: '',
        price: ''
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
                        <Label for="expimgurl">Upload or take an event photo</Label>
                        <Input
                        type="text"
                        name="expimgurl"
                        placeholder="Enter Your Event Image"
                        onChange = {this.handleChanges}
                        value={this.state.expimgurl}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Enter event admission</Label>
                        <Input
                        type="text"
                        name="price"
                        placeholder="$0.00 per person"
                        onChange = {this.handleChanges}
                        value={this.state.price}
                        />
                    </FormGroup>
                        <Button className="button-style">Next</Button>
                    </Form>
                    </div>
                </div>
        )
    }
}