import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Sidebar extends Component {
    render() {
        return (
            <div className="main_sidebar ml-4">
                <small>Navigation Bar</small>
                <nav className="mt-3">
                    <ul>
                        <li><a href="">Line one</a></li>
                        <li><a href="">Line one</a></li>
                        <li><a href="">Line one</a></li>
                        <li><a href="">Line one</a></li>
                        <li><a href="">Line one</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Sidebar;
