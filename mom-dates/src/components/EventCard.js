import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const EventCard= props =>{
    return(
        <div className="dash-content">
                    <div className="dash-card">
                    <Card>
                        <CardImg top width="100%" src={props.event.expimgurl} alt="Adventure Card" />
                        <CardBody>
                        <CardTitle className="card-title">{props.event.title}</CardTitle>
                        <CardSubtitle className="card-subtitle">${props.event.price} per person {props.event.date}</CardSubtitle>
                        <CardText className="card-text">{props.event.blurb}</CardText>
                        <Button onClick={props.viewEvent} >Learn More</Button>
                        <Button>Book Now</Button>
                        </CardBody>
                    </Card>
                    </div>
                </div>
    )
}

export default EventCard;