import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import AuthService from '../../services/AuthService';

class Login extends Component {
    state = {}
    render() {
        return (<>

            <div className="auth fix_height">
                <div className="lgoin_container margin_top130PX">
                    <Row>
                        <Col className="p-0 bg_login_left" lg={5}>
                            <div className="login_left_side">
                                <h2 className="text-light">Welcome to back</h2>
                                <p className="text-light text-justify">This is a new line of demo text here. The content is dumy content of our website.</p>
                                <a className="btn btn-success" href="#resigteration">Registration</a>
                            </div>
                        </Col>
                        <Col className="p-0 bg_login_right" lg={7}>
                            <div className="login_form">
                                <div className="login_right_side text-center">
                                    <h2 className="mb-4">User Login</h2>
                                    <form action="/">
                                        <div className="form-group text-left positon-relative">
                                            <FeatherIcon icon="user" />
                                            <input type="email" placeholder="Enter your email addresss" className="form-control" />
                                        </div>
                                        <div className="form-group text-left">
                                            <FeatherIcon icon="lock" />
                                            <input type="password" placeholder="*****************" className="form-control" />
                                        </div>
                                        <div class="form-check text-left pb-3">
                                            <input type="checkbox" class="form-check-input" id="remember" />
                                            <label class="form-check-label" for="remember">Remember Me</label>
                                        </div>
                                        <div className="button-group text-left">
                                            <button className="btn btn-success btn-sm mr-2">Login</button>
                                            <button className="btn btn-danger btn-sm">Forgot password</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        </>);
    }
}

export default Login;