import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import FeatherIcon from 'feather-icons-react';

class Nav extends Component {
    render() {
        return (
            <div>
                <Navbar className="justify-content-between" sticky="top">
                    <Navbar.Brand className="logo" href="/dashboard">
                        <span className="mr-2"><FeatherIcon icon="globe" /></span>Covid-19
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a className="mr-4" href="#register"> Mbr-Sagor <FeatherIcon icon="user" /></a>
                            <a href="/">Logout <FeatherIcon icon="lock" /></a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Nav;