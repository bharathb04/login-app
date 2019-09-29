import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';

import '../pages/Pages.css';

class HomeCard extends Component {
    render() {
        return (
            <div>
            
            <Card style={{ width: '80rem', left: '100px', top:'4px', height: '40rem' , backgroundColor:'rgba(34, 149, 194, 0.4)'}}>
                 <Card.Img variant="top" src="/Baloon.jpg" style={{width: '832px',height:'624px'}}/>
                <Card.Body>
                    <Card.Title>Did you know?</Card.Title>
                    <Card.Text>
                    Research suggests that nature can be mentally restorative by reducing stress and enabling people 
                    to regain concentration.
                    </Card.Text>

                </Card.Body>

            </Card>
                
            </div>
        )
    }
}

export default HomeCard
