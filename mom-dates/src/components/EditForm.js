import React from 'react';
import { Button, ButtonGroup, Form, FormGroup, Label, Input} from 'reactstrap';
import { connect } from 'react-redux';
import { editevent  } from '../actions'
class EditForm extends React.Component{
    state= {
        event: this.props.activeCard,
        title: '',
        explocation: '',
        dates:'',
        blurb:'',
        expdesc:'',
        availability: '',
        expimgurl: '',
        price: '',
        eventId:''
    };

    handleChanges = e => {
        e.preventDefault();
        let value = e.target.value
       this.setState({
        eventId: this.props.activeCard.expid,
          event: {
              ...this.state.event.activeCard,
              [e.target.name]: value
          }
       });
    }

    editEvent = e =>{
        this.props.editevent(e, this.state.event)
    };

    render(){
        console.log(this.state.eventId)
        return(
            <>
             <div>
                    <div className="signup-form">
                    <h1>Edit Event</h1>
                    <Form className="form" onSubmit={this.onSubmit} >
                    <FormGroup>
                        <Label for="title">Name of event</Label>
                        <Input
                        type="text"
                        name="title"
                        placeholder="Enter Your Event Name"
                        onChange = {this.handleChanges}
                        value={this.state.event.title}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="location">Location</Label>
                        <Input
                        type="text"
                        name="explocation"
                        placeholder="Enter Your Event Location"
                        onChange = {this.handleChanges}
                        value={this.state.event.explocation}
                        />
                    </FormGroup>
                    <FormGroup>
                    <Label for="dates"></Label>
                    <Input
                    type="text"
                    name="dates"
                    placeholder="Select Dates"
                    onChange = {this.handleChanges}
                    value={this.state.event.dates}
                    />
                </FormGroup>
                    <ButtonGroup>
                        <Button className="kids">Kid Free</Button>
                        <Button className="kids">Kid Friendly</Button>
                    </ButtonGroup>
                    <FormGroup>
                        <Label for="blurb">Write a short blurb for the summary.</Label>
                        <Input
                        type="text"
                        name="blurb"
                        placeholder="Enter Summary Here"
                        onChange = {this.handleChanges}
                        value={this.state.event.blurb}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="expdesc">Details</Label>
                        <Input
                        type="textarea"
                        name="expdesc"
                        placeholder="Enter The Deets"
                        onChange = {this.handleChanges}
                        value={this.state.event.expdesc}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="availability">Availability</Label>
                        <Input
                        type="text"
                        name="availability"
                        placeholder="Enter spots available."
                        onChange = {this.handleChanges}
                        value={this.state.event.availability}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="expimgurl">Upload or take an event photo</Label>
                        <Input
                        type="text"
                        name="expimgurl"
                        placeholder="Enter Your Event Image"
                        onChange = {this.handleChanges}
                        value={this.state.event.expimgurl}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Enter event admission</Label>
                        <Input
                        type="text"
                        name="price"
                        placeholder="$0.00 per person"
                        onChange = {this.handleChanges}
                        value={this.state.event.price}
                        />
                    </FormGroup>
                        <Button className="button-style"  onClick={(e)=>{this.editEvent(this.state.eventId)}}>Edit</Button>
                    </Form>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = ({activeCard}) => ({activeCard})

export default connect(mapStateToProps, { editevent })(EditForm);