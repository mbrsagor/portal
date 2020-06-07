import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Error404 extends Component {
    render() {
        return (
            <div className="card text-center error_404">
                <div className="card-header">
                    <h4 className="card-title">Error</h4>
                </div>
                <div className="card-body">
                    <h1>404 Not Found!!</h1>
                    <p>Sorry the page not found !! <NavLink to="/">Home</NavLink></p>
                </div>
            </div>
        );
    }
}

export default Error404;
