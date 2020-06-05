import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';


class Nav extends Component {
    render() {
        return (
            <div>
                <Navbar className="bg-light justify-content-between" sticky="top">
                    <Navbar.Brand className="logo" href="/">
                        Covid-<span>19</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a className="mr-3" href="#login">Signup</a>
                            <a href="#login">Login</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Nav;