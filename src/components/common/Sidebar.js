import React, { Component } from 'react';
import FeatherIcon from 'feather-icons-react';

class Sidebar extends Component {
    render() {
        return (
            <div className="main_sidebar">
                <nav>
                    <ul>
                        <li className="activeMenuItem"><a href="/"><FeatherIcon icon="home" /> Home Page</a></li>
                        <li><a href="/help-line"><FeatherIcon icon="help-circle" /> Help Line</a></li>
                        <li><a href="/"><FeatherIcon icon="alert-triangle" /> Total Test</a></li>
                        <li><a href="/"><FeatherIcon icon="shield-off" /> Total Dies</a></li>
                        <li><a href="/"><FeatherIcon icon="eye-off" /> Total Effected</a></li>
                        <li><a href="/"><FeatherIcon icon="eye" /> Total Recovery</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Sidebar;
