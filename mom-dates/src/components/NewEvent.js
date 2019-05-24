import React from 'react';
import { Button } from "reactstrap";

import { connect } from 'react-redux';
import { addevent } from '../actions';
import EventForm from './EventComponents/EventForm';
import EventSummary from './EventComponents/EventSummary';
import EventPhoto from './EventComponents/EventPhoto'



class NewEvent extends React.Component {
    state={
        form: [],
        currentStep: 0,
    }

    onSubmit = form =>{
        if(this.state.currentStep>2){
            this.props.addevent(this.state.form).then(()=>this.props.history.push('/dashboard') )
            // window.location.reload();
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
             {this.state.currentStep === 0 && <EventForm onSubmit={this.onSubmit} />}
             {this.state.currentStep === 1 && <EventSummary onSubmit={this.onSubmit}  />} 
             {this.state.currentStep === 2 && <EventPhoto onSubmit={this.onSubmit} />}
             {this.state.currentStep >2 && <Button onClick={this.onSubmit}>Publish</Button>}
             {/* {this.state.currentStep === 3 && <EventPost onSubmit={this.onSubmit} />} */}
             
            
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
    { addevent }
)(NewEvent);

// event:{
//     name:'',
//     location:'',
//     dates:'',
//     summary:'',
//     details:'',
//     image:'',
//     pricing:''
// }
