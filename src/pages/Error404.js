import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Error404 extends Component {
    render() {
        return (
            <div className="error text-center ">
                <div className="error_title">
                    <h4 className="">Error</h4>
                </div>
                <div className="error_content">
                    <h1>404 Not Found!!</h1>
                    <p>Sorry the page not found !! </p>
                    <NavLink to="/">Home</NavLink>
                </div>
            </div>
        );
    }
}

export default Error404;
