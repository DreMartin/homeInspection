import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './auth.css'
import Signup from './Signup';
import Login from './Login';

class Auth extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showSignup: false
        };

        this.signup = this.signup.bind(this)
        this.signupState = this.signupState.bind(this)
    }

    signup(e) {
        if (this.state.showSignup === false) {
            return (
                <Col md="12" className="login-col">
                    <Login setToken={this.props.setToken} />
                </Col>
            )
        } else {
            return (
                <Col md="12">
                    <Signup setToken={this.props.setToken} />
                </Col>
            )
        }
    }

    signupState(e) {
        e.preventDefault()
        this.setState({showSignup:!this.state.showSignup})
        console.log(this.state)
    }

    render() {

        return (
            <Container className="auth-container" >
                <Row>
                    {this.signup()}
                    <p>Not a user yet? Click <button onClick={this.signupState}>here</button> to Sign Up</p>
                </Row>
            </Container>
        )
    }

}

export default Auth;