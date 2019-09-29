import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

import {Redirect} from 'react-router-dom';

import '../pages/Pages.css';
import {authDetails} from '../auth';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',

            toWelcome: false,
            isAuthenticated: 'never',
            setShow: false,
            isLoading: false,
        } 

        localStorage.clear();

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.closeAlert = this.closeAlert.bind(this);
    }
   
    handleChange(event) {

        const target = event.target;
        const name = target.name;
        const value = target.value;

         this.setState({
         [name]: value
        });             
    }

    handleClick() {  

        this.setState({ 
          isLoading: 'grow',  
          toWelcome: true,  
        })

        const result = authDetails.login(this.state.username,this.state.password);
        result.then((value) => {this.setState({isAuthenticated: value, setShow: !value, isLoading: false})});

    }

    closeAlert() {

        this.setState({
            setShow: false,
            username:'',
            password:'',
           });    

    }

    render() {

        const invalid = ((username, password) => {return {userValid: username.length !== 0, passValid: password.length !== 0 }});
        const {userValid,passValid} = invalid(this.state.username,this.state.password);
        const disabledStatus = (userValid && passValid ? false : true);
        
    //    console.log('Invalid--', invalid(this.state.username,this.state.password),'flags',userValid);

        if ((this.state.toWelcome === true) && (this.state.isAuthenticated === true)){
            localStorage.setItem('token',this.state.isAuthenticated); 
            localStorage.setItem('username',this.state.username);

            return <Redirect to={{pathname:'/Welcome'}}/>
          } 
    /*

                        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                            <Tab eventKey="home" title="Home">  
                            </Tab>
                        </Tabs>


    */
        return (
            <div className="Login">
                <Form>  
                        
                        <Form.Group controlId="formBasicName" >
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="input" value={this.state.username} placeholder="User Name" name="username" 
                                          autoComplete="username"  onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={this.state.password} placeholder="Password" name="password"
                                           autoComplete="current-password" onChange={this.handleChange}/> 
                        </Form.Group>
                        
                        <Button variant="primary" type="button" onClick={this.handleClick} 
                                disabled={disabledStatus}>
                         <Spinner animation={this.state.isLoading} size="sm" as="span" id="Spinner"/>
                         Submit
                        </Button>

                        <Alert variant="danger" dismissible show={this.state.setShow} onClick={this.closeAlert}>
                            <Alert.Heading>User Name or Password is Invalid, please try again.</Alert.Heading>
                        </Alert>
                </Form>

            </div>
        )
    }
}

export default Login
