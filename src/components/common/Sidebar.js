import React, { Component } from 'react';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div className="main_sidebar">
                <nav>
                    <ul>
                        <li className="activeMenuItem"><NavLink to="/"><FeatherIcon icon="home" /> Home Page</NavLink></li>
                        <li><NavLink to="/disease"><FeatherIcon icon="droplet" /> Disease</NavLink></li>
                        <li><NavLink to="/"><FeatherIcon icon="alert-triangle" /> Total Test</NavLink></li>
                        <li><NavLink to="/"><FeatherIcon icon="shield-off" /> Total Dies</NavLink></li>
                        <li><NavLink to="/"><FeatherIcon icon="eye-off" /> Total Effected</NavLink></li>
                        <li><NavLink to="/"><FeatherIcon icon="eye" /> Total Recovery</NavLink></li>
                        <li><NavLink to="/add-hospital"><FeatherIcon icon="package" /> Add Hospital</NavLink></li>
                        <li><NavLink to="/help"><FeatherIcon icon="help-circle" /> Help Line</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Sidebar;
