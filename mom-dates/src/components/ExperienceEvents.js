import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { connect } from 'react-redux';

const ExperienceEvents= props =>{
    // console.log(props.event)
    return(
        <div>
            <Button onClick={props.history.goBack}> Back </Button>
        <div className="dash-content">
                    <div className="dash-card">
                    <Card>
                        <CardImg top width="100%" src={props.event.expimgurl} alt="Adventure Card" />
                        <CardBody>
                        <CardTitle className="card-title">{props.event.title}</CardTitle>
                        <CardSubtitle className="card-subtitle">${props.event.price} per person {props.event.dates}</CardSubtitle>
                        <CardText className="card-text">{props.event.blurb}</CardText>
                        <Button onClick={(e)=>{props.viewEvent(e, props.event.expid, props.events)}}  >Edit</Button>
                        <Button>Delete</Button>
                        </CardBody>
                    </Card>
                    </div>
                </div>
            </div>
    )
}


export default ExperienceEvents;