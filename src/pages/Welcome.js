import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import './Pages.css';

export class Welcome extends Component {

    render() {
        var username = this.props.username.toLowerCase();
        username = username.charAt(0).toUpperCase() + username.slice(1);

        console.log(localStorage.getItem('username'));

        return (
            <div className="Welcome">
                <h1>Welcome {username} !</h1>

                <h4>
                <Card.Link href="/" onClick={()=>localStorage.clear()}>LogOut</Card.Link>
                </h4>
            </div>
        )
    }
}

export default Welcome
