import React from 'react';
import { Button, ButtonGroup, Form, FormGroup, Label, Input} from 'reactstrap';
import EventCard from '../components/EventCard';
import { connect } from 'react-redux';

import {viewEvent, getData } from '../actions';

class SearchBar extends React.Component{
state={
    eventsData: [],
    search:''
}

componentDidMount(){
    this.props.getData()
    .then(()=>{
        this.setState({
            eventsData: this.props.events
        })
    })
}


handleChanges = e => {
    e.preventDefault();
    // console.log(e.target.value)
    this.setState({
      search: e.target.value
    },
     ()=> { 
        //  console.log(this.state.eventsData)
        let experiences = this.props.events.filter(event => event.title.includes(this.state.search))
        console.log(experiences)
        experiences = (experiences.length) ? experiences : this.props.events 
    this.setState({eventsData : experiences})
    })     
    // console.log(experiences)
    // this.setState({
    // eventsData : experiences
    // })
   
}

handleSubmit = e => {
    e.preventDefault();
}

viewEvent= (e, expid, events) => {
    e.preventDefault();
    // console.log(events);
    this.props.viewEvent(expid, events)
    .then(()=>this.props.history.push(`/experience/${expid}`))
}

render(){
    return(
        <>
        <div>
            <h1>Search</h1>
            <Form className="form" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="search"></Label>
                    <Input 
                    type="text"
                    name="search"
                    placeholder="Search for event here"
                    onChange={this.handleChanges}
                    value={this.state.search}
                    />
                    </FormGroup>
                    {/* <FormGroup>
                        <Label for="location">Choose location</Label>
                        <Input
                        type="text"
                        name="explocation"
                        placeholder="Search for location here"
                        onChange = {this.handleChanges}
                        value={this.state.explocation}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dates">Select Dates</Label>
                        <Input
                        type="text"
                        name="dates"
                        placeholder="Select Dates"
                        onChange = {this.handleChanges}
                        value={this.state.dates}
                        />
                    </FormGroup> */}
            </Form>
        </div>
        <div className="near-you" id="location">
                <h1>Explore</h1>
                <div className="dash-content">
            {this.state.eventsData.length && this.state.eventsData.map((event,i) =>{
                return (
                    <EventCard event={event} events={this.props.events}  key={i} viewEvent={this.viewEvent}  />
                )
            })

            }
            </div>
            </div>
        </>
    )
}

}


const mapStateToProps= ({ events }) => ({ events })

export default connect(mapStateToProps, { viewEvent, getData })(SearchBar)