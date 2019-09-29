import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default class HomeNav extends Component {
    render() {
        return (
            <div>
            <div>
            <h3 style={{color: 'rgb(20, 43, 141)',paddingLeft:'14px',textShadow:'0 0 2px rgb(196, 91, 21), 0 0 4px rgb(196, 91, 21)'}}>
                Neami National Portal</h3>
            </div>    
            <Navbar style={{top:'5px', backgroundColor:'rgb(230, 103, 30)'}}>
                <Nav className="mr-auto">
                    <Nav.Link style={{fontWeight:'220', color:'White'}}>Home Page</Nav.Link>
                </Nav>
            </Navbar>
                
            </div>
        )
    }

}
