import React, { Component } from 'react';
import { Container, Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <Navbar bg="light" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/create">Create User</Link>
                    <Link to="/user-detail">User Detail</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        );
    }
}
 
export default NavBar;