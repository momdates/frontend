import React from 'react';
import { Button, ButtonGroup, Form, FormGroup, Label, Input} from 'reactstrap';
import { connect } from 'react-redux';
import { editevent  } from '../actions'
class EditForm extends React.Component{
    state= {
        event: this.props.activeCard,
        title: this.props.activeCard.title,
        explocation: this.props.activeCard.explocation,
        dates:this.props.activeCard.dates,
        blurb:this.props.activeCard.blurb,
        expdesc:this.props.activeCard.expdesc,
        availability: this.props.activeCard.availability,
        expimgurl: this.props.activeCard.expimgurl,
        price: this.props.activeCard.price,
        eventId:this.props.activeCard.eventId
    };

    handleChanges = e => {
        e.preventDefault();
        let value = e.target.value
       this.setState({
           ...this.state, 
           [e.target.name]: value,
        eventId: this.props.activeCard.expid,
       });
    }

    editEvent = e =>{
        this.props.editevent(e, this.state.event)
    };

    render(){
        // console.log(this.state.eventId)
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
                    <FormGroup>
                    <Label for="dates"></Label>
                    <Input
                    type="text"
                    name="dates"
                    placeholder="Select Dates"
                    onChange = {this.handleChanges}
                    value={this.state.dates}
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