import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { states } from "./states";

export class Location extends React.Component {
  state = {
    location: "",
    states: [],
    zip: ""

    // this.handleChanges=this.handleChanges.bind(this)
  };

  componentDidMount() {
    this.setState({
      states: states
    });
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value,
      location: this.state.select
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ locationForm: this.state });
  };

  render() {
    return (
      <div className="signup-form">
        <h1> Where are you located? </h1>
        <i className="fas fa-map-marker-alt" />
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="location">Choose your state from dropdown</Label>
            <Input
              type="select"
              name="select"
              id="location"
              value={this.state.location}
              onChange={this.handleChanges}
            >
              {this.state.states.map((state, i) => (
                <option key={i} value={state}>
                  {state}
                </option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="zipcode">Zip Code</Label>
            <Input
              type="text"
              name="zip"
              placeholder="Enter Zip Code"
              onChange={this.handleChanges}
              value={this.state.zip}
            />
          </FormGroup>
          <Button className="button-style" type="submit">
            Next
          </Button>
        </Form>
      </div>
    );
  }
}
