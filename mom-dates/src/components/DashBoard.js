import React from "react";
import { withRouter } from "react-router-dom";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import EventCard from "./EventCard";
import { connect } from "react-redux";

import { getData, deleteEvent, editevent, viewEvent } from "../actions";

class DashBoard extends React.Component {
  state = {
    // deletingEvent: null,
    // editingEvent: null,
    // viewingEvent: null,
    // fetchingEvents: false,
    // events:[]
  };

  componentDidMount() {
    this.props.getData();
  }

  editEvent = e => {
    e.preventDefault();
    this.props.editEvent(this.props.events);
    // .then(()=>{
    //     this.setState({editingEventId: null})
    // })
  };

  viewEvent = (e, expid, events) => {
    e.preventDefault();
    // console.log(events);
    this.props
      .viewEvent(expid, events)
      .then(() => this.props.history.push(`/experience/${expid}`));
  };

  deleteEvent = id => {
    this.setState({ deletingEventID: id });
    this.props.deleteEvent(id);
  };

  render() {
    return (
      <div className="dashboard">
        <div className="dash-nav">
          <Nav>
            <NavItem>
              <NavLink href="#interests">Picked For You</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#location">Near You</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#new-events">Try Something New</NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="new-event-btn"
                outline
                color="secondary"
                href="/events"
              >
                <i className="fas fa-plus" /> New Event
              </Button>
            </NavItem>
          </Nav>
        </div>
        <div className="dash-content">
          <div className="near-you" id="location">
            <h1>Near You</h1>
            {this.props.events.length &&
              this.props.events.map((event, i) => {
                return (
                  <EventCard
                    event={event}
                    events={this.props.events}
                    key={i}
                    viewEvent={this.viewEvent}
                  />
                );
              })}
          </div>
        </div>
        {/* <div className="dash-content">
                <div className="near-you" id="location">
                    <h1>Near You</h1>
                    <div className="dash-card">
                    <Card>
                        <CardImg top width="100%" src="https://files.slack.com/files-pri/T4JUEB3ME-FJPLPMUD7/jake-melara-30681-unsplash.jpg" alt="Adventure Card" />
                        <CardBody>
                        <CardTitle className="card-title">Backpacking with Babies</CardTitle>
                        <CardSubtitle className="card-subtitle">$30.00 1/6/2019</CardSubtitle>
                        <CardText className="card-text">Stick your little one in a pack and let's hike!</CardText>
                        <Button>Learn More</Button>
                        <Button>Book Now</Button>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="dash-card">
                    <Card>
                        <CardImg top width="100%" src="https://files.slack.com/files-pri/T4JUEB3ME-FJY2EAMGW/florian-metzner-1121738-unsplash.jpg" alt="Adventure Card" />
                        <CardBody>
                        <CardTitle>Sushi Making</CardTitle>
                        <CardSubtitle>$30.00 1/12/2019</CardSubtitle>
                        <CardText>Come learn how to make traditional sushi from scratch.</CardText>
                        <Button>Learn More</Button>
                        <Button>Book Now</Button>
                        </CardBody>
                    </Card>
                    </div>
                </div>
                <div className="interest-based" id="interests">
                    <h1>Based upon your interests</h1>
                    <div className="dash-card">
                    <Card>
                        <CardImg top width="100%" src="https://files.slack.com/files-pri/T4JUEB3ME-FJVBDJF28/rebecca-grant-1143977-unsplash.jpg" alt="Adventure Card" />
                        <CardBody>
                        <CardTitle>Knitting Legwarmers</CardTitle>
                        <CardSubtitle>$15.00 2/20/2019</CardSubtitle>
                        <CardText>Leg warmers are in- come learn to make your own!</CardText>
                        <Button>Learn More</Button>
                        <Button>Book Now</Button>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="dash-card">
                    <Card>
                        <CardImg top width="100%" src="https://files.slack.com/files-pri/T4JUEB3ME-FJJDTFXBM/michael-discenza-199756-unsplash.jpg" alt="Adventure Card" />
                        <CardBody>
                        <CardTitle>Salsa Dancing/Girls Night Out</CardTitle>
                        <CardSubtitle>$10.00 3/15/2019</CardSubtitle>
                        <CardText>Come get drinks and salsa a bit, beginners welcome! Really just to socialize :3</CardText>
                        <Button>Learn More</Button>
                        <Button>Book Now</Button>
                        </CardBody>
                    </Card>
                    </div>
                </div>
            </div> */}
      </div>
    );
  }
}

const mapStateToProps = ({
  deletingEvent,
  events,
  fetchingEvents,
  editingEvent
}) => ({
  deletingEvent,
  events,
  fetchingEvents,
  editingEvent
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData, deleteEvent, editevent, viewEvent }
  )(DashBoard)
);
