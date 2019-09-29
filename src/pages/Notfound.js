import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

import './Pages.css';

export class Notfound extends Component {
    render() {

        console.log(localStorage.getItem('username'));

        return (
            <div className="Notfound">
                <h3>You are in this page because either you are not logged in or this link does not exist!!!</h3>
            

            <h4>
            <Card.Link href="/">Login Here</Card.Link>
            </h4>
            </div>
        )
    }
}

export default Notfound
