import React from 'react';
import styled from 'styled-components';
// import * as FontAwesome from 'react-icons/fa';
// import FaRa from 'react-icons/fa/ra';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';

const Wrapper = styled.div`
background: #FF6700;
text-alignment: left;
`


class SiteBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Wrapper>
                <Navbar color="faded"  light expand="md">
                    <NavbarBrand href='<FaRa/>'></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" onClick={() => this.props.clickLogout()}>Logout</NavLink>
                            </NavItem>
                            <h3 id="navTitle" >Home Inspection</h3>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Wrapper>
        );
    }

}

export default SiteBar;