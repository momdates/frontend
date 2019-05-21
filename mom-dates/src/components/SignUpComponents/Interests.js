import React from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';

export class Interests extends React.Component {
    state={
        interests:[],
        interest: '',
    }

    handleChanges= e => {
        e.preventDefault();
        this.setState({
           [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({interestForm:this.state})
    }

    addInterest = e =>{
        e.preventDefault();
        this.setState({
            interests:[...this.state.interests, this.state.interest],
            interest:''
        })
    }

    render(){
        return(
            <div className="signup-form">
                <h1 className="interest-htag">Great. Now, tell us some things you're interested in.</h1>
                <i class="fas fa-heart"></i>
                <Form onSubmit={this.addInterest}>
                    <FormGroup>
                    <Input
                    type="text"
                    name="interest"
                    placeholder="Search for something"
                    onChange={this.handleChanges}
                    value={this.state.interest}
                    />
                    </FormGroup>
                    {/* <Button className="button-style" type="submit">Add Interests</Button> */}
                </Form>
                <div className="interest-list">
                {this.state.interests && this.state.interests.map((interest,i) => <Button className="interest-btn" key={i} disabled>{interest}</Button>)}
                </div>
                </div>
        )
    }
}