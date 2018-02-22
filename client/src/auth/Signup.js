import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isEmpty: true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateSignUp = this.validateSignUp.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        fetch("http://localhost:3000/api/user", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
              })

        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)

        }) 
        event.preventDefault()
    }

    // This is the start of basic validation, but you can do a lot with this.
    validateSignUp(event) {
        this.setState({
            errorMessage:'Fields must not be empty'
        })
        event.preventDefault();
    }

    render() {
        // here for validation
        const submitHandler = !this.state.username ? this.validateSignUp : this.handleSubmit
        return (
            <div>
                <h1>Sign Up</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat, atque nulla, soluta vero reprehenderit numquam incidunt, rem quaerat quos voluptatum perferendis. Distinctio culpa iste atque blanditiis placeat qui ipsa?</h6>
                <Form onSubmit={submitHandler} >
                    <FormGroup>
                        <Label for="username">username</Label>
                        <Input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                        {this.state.errorMessage && <span className="error">user name is required</span>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">email</Label>
                        <Input id="su_email" type="email" name="email" placeholder="enter your email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input id="su_phone" type="number" name="phone" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="company">Company</Label>
                        <Input id="su_company" type="text" name="company" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input id="su_address" type="text" name="address" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="license">Inspector Licence #</Label>
                        <Input id="su_license" type="text" name="license" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }


}

export default Signup;