import React, { Component } from 'react';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div className="main_sidebar">
                <nav>
                    <ul>
                        <li className="activeMenuItem"><NavLink to="/dashboard"><FeatherIcon icon="home" /> Dashboard</NavLink></li>
                        <li><NavLink to="/add-disease"><FeatherIcon icon="droplet" /> Disease</NavLink></li>
                        <li><NavLink to="/add-contagion"><FeatherIcon icon="alert-triangle" /> Add Contagion</NavLink></li>
                        <li><NavLink to="/add-experience"><FeatherIcon icon="map-pin" /> Add Experience</NavLink></li>
                        <li><NavLink to="/add-department"><FeatherIcon icon="package" /> Add Department</NavLink></li>
                        <li><NavLink to="/add-availability"><FeatherIcon icon="link-2" /> Add Availability</NavLink></li>
                        <li><NavLink to="/help"><FeatherIcon icon="help-circle" /> Help Line</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Sidebar;
