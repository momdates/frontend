import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions'
import { Button } from 'reactstrap';

import { SignUpForm } from './SignUpComponents/SignUpForm';
import { Location } from './SignUpComponents/Location';
import { Interests } from './SignUpComponents/Interests';

class SignUp extends Component{
state = {
    form: [],
    currentStep: 0,
    dropdownOpen: false 
}

onSubmit = form =>{
    if(this.state.currentStep>2){
        this.props.signup(this.state.form).then(()=>this.props.history.push('/dashboard'))
    }
    this.setState({
       form:[ 
        ...this.state.form, 
        form
       ],
       currentStep: this.state.currentStep +1,
    })
}


render(){
    console.log(this.state.form)
    return(
        <>
         {this.state.currentStep === 0 && <SignUpForm onSubmit={this.onSubmit} />}
         {this.state.currentStep === 1 && <Location onSubmit={this.onSubmit}  />} 
         {this.state.currentStep === 2 && <Interests onSubmit={this.onSubmit} />}
         {this.state.currentStep >2  && <Button onClick={this.onSubmit}>Finish Sign Up</Button>}
        
         </>
        // put your form here pass in this.onSubmit as a prop 
        // give your form onSubmit the function you just passed in props
    )
}

}

const mapStateToProps = state => ({
    ...state
})

export default connect(
    mapStateToProps,
    { signup }
)(SignUp);