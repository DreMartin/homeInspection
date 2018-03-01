import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        fetch("http://localhost:3000/api/login", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
              })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
            console.log(data);
            

        }) 
        event.preventDefault()
    }

    render() {
        return (

            <div id="loginDiv">
                <h1 className="loginh1">Login</h1>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label className="logSignText" for="username">Username</Label>
                        <Input id="li_username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label  className="logSignText" for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }


}

export default Login;