import React from 'react';

class EditForm extends React.Component{
    state= {
        event: this.props.event
    };

    handleChanges = e => {
       this.setState({
           event: {
               ...this.state.event,
               [e.target.name]: value
           }
       });
       
    }

    editEvent = e =>{
        this.props.editEvent(e, this.state.event)
    };

    render(){
        return(
            <>
            <div className="dash-content">
            <div className="edit-form">
            <h1>Edit Event</h1>
            </div>
            </div>
            </>
        )
    }
}

export default EditForm;