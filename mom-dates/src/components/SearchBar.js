import React from 'react';
import { Button, ButtonGroup, Form, FormGroup, Label, Input} from 'reactstrap';

class SearchBar extends React.Component{
state={
    eventsData: [],
    searchDisplay: []
}

componentDidMount(){
    this.setState({
        eventsData: this.props.events,
        searchDisplay: this.props.searchDisplay
    })
}

render(){
    return(
        <div>
            <h1>Search</h1>
            <Form className="form">
                <FormGroup>
                    <Label for="search"></Label>
                    <Input 
                    type="text"
                    name="searchDisplay"
                    placeholder="Search for event here"
                    onChange={this.handleChanges}
                    value={this.state.searchDisplay}
                    />
                    </FormGroup>
                    <FormGroup>
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
                    </FormGroup>
                
            </Form>
        </div>
    )
}

}

export default SearchBar