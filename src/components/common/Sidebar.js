import React, { Component } from 'react';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div className="main_sidebar">
                <nav>
                    <ul>
                        <li><NavLink activeClassName="activeMenuItem" to="/dashboard"><FeatherIcon icon="home" /> Dashboard</NavLink></li>
                        <li><NavLink activeClassName="activeMenuItem" to="/add-doctor"><FeatherIcon icon="home" /> Add New Doctor</NavLink></li>
                        <li><NavLink activeClassName="activeMenuItem" to="/add-disease"><FeatherIcon icon="droplet" /> Disease</NavLink></li>
                        <li><NavLink activeClassName="activeMenuItem" to="/add-contagion"><FeatherIcon icon="alert-triangle" /> Add Contagion</NavLink></li>
                        <li><NavLink activeClassName="activeMenuItem" to="/add-experience"><FeatherIcon icon="map-pin" /> Add Experience</NavLink></li>
                        <li><NavLink activeClassName="activeMenuItem" to="/add-department"><FeatherIcon icon="package" /> Add Department</NavLink></li>
                        <li><NavLink activeClassName="activeMenuItem" to="/add-availability"><FeatherIcon icon="disc" /> Add Availability</NavLink></li>
                        <li><NavLink activeClassName="activeMenuItem" to="/add-laboratorie"><FeatherIcon icon="gitlab" /> Add Laboratorie</NavLink></li>
                        <li><NavLink activeClassName="activeMenuItem" to="/add-service"><FeatherIcon icon="database" /> Add Service</NavLink></li>
                        <li><NavLink activeClassName="activeMenuItem" to="/help"><FeatherIcon icon="help-circle" /> Help Line</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Sidebar;
