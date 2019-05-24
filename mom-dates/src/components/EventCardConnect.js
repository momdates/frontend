import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { connect } from 'react-redux';


const EventCard= ({events, event, viewEvent, expid, ...props }) =>{
    // console.log(props.event)
    if(this.props.events)
     event = events.find(event => event.expid === expid || 0)
    // if(this.props.event)
    return(
        <div className="dash-content">
                    <div className="dash-card">
                    <Card>
                        <CardImg top width="100%" src={event.expimgurl} alt="Adventure Card" />
                        <CardBody>
                        <CardTitle className="card-title">{event.title}</CardTitle>
                        <CardSubtitle className="card-subtitle">${event.price} per person {event.dates}</CardSubtitle>
                        <CardText className="card-text">{event.blurb}</CardText>
                        <Button onClick={(e)=>{viewEvent(e, event.expid, events)}}  >Learn More</Button>
                        <Button>Book Now</Button>
                        </CardBody>
                    </Card>
                    </div>
                </div>
    )
}

const mapStateToProps = ({ viewingEvent, events })=> ({ viewingEvent, events })

export default connect(mapStateToProps, (EventCard));