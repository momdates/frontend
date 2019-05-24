import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
// import { connect } from 'react-redux';



const ExperienceEvents= props =>{
    console.log(props)
    return(
        <div className="dashboard">
            <Button onClick={props.history.goBack}> Back </Button>
        <div className="dash-content">
                    <div className="card-info">
                    <Card>
                        <CardImg top width="100%" src={props.event.expimgurl} alt="Adventure Card" />
                        <CardBody>
                        <CardTitle className="card-title">{props.event.title}</CardTitle>
                        <CardSubtitle className="card-subtitle">${props.event.price} per person {props.event.dates}</CardSubtitle>
                        <CardText className="card-text">{props.event.expdesc}</CardText>
                        <Button onClick={(e)=>{props.history.push({pathname:"/editevent", state:{from:props.location.pathname}})}}>Edit</Button>
                        <Button onClick={(e)=>{props.deleteEvent(props.event.expid)} }>Delete</Button>
                        </CardBody>
                    </Card>
                    </div>
                </div>
            </div>
    )
}



export default ExperienceEvents;