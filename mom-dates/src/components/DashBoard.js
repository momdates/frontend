import React from 'react';
import { Nav, NavItem, NavLink, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class DashBoard extends React.Component {


render(){
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
                    <NavLink href="#event">Add Event</NavLink>
                </NavItem>
            </Nav>
            </div>
            <div className="dash-content">
            <div className="dash-card">
            <Card>
                <CardImg top width="100%" src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Adventure Card" />
                <CardBody>
                <CardTitle>Adventure With Babies</CardTitle>
                <CardSubtitle>$30.00</CardSubtitle>
                <CardText>Grab that little one and let's go on an adventure!</CardText>
                <Button>Learn More</Button>
                <Button>Book Now</Button>
                </CardBody>
            </Card>
            </div>
            <div className="dash-card">
            <Card>
                <CardImg top width="100%" src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Adventure Card" />
                <CardBody>
                <CardTitle>Adventure With Babies</CardTitle>
                <CardSubtitle>$30.00</CardSubtitle>
                <CardText>Grab that little one and let's go on an adventure!</CardText>
                <Button>Learn More</Button>
                <Button>Book Now</Button>
                </CardBody>
            </Card>
            </div>
            </div>
        </div>
    )
}
}

export default DashBoard