import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import AuthService from '../../services/AuthService';

const auth_service = new AuthService()

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
        };

    };

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    // Login handler
    handleLogin(e) {
        e.preventDefault();

        auth_service.login(this.state.username, this.state.password).then(
            () => {
                this.props.history.push('/dashboard');
                window.location.reload();
            },
            error => {
                var message = `Sorry!, Username and Passsword Invalid`
                ToastsStore.error(message);
            }
        )

    }

    render() {
        return (
            <>
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
                                        <h2 className="mb-4"><span className="mr-5"><FeatherIcon icon="globe" /></span> Covid-19</h2>
                                        <div className="alert alert-danger alert-dismissible">
                                            <a href="javascript(void)" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                                            <strong>Sorry!</strong> Username & Password Incorrent
                                        </div>
                                        <form onSubmit={this.handleLogin}>
                                            <div className="form-group text-left positon-relative">
                                                <FeatherIcon icon="user" />
                                                <input
                                                    type="username"
                                                    placeholder="Enter username"
                                                    className="form-control"
                                                    name="username"
                                                    value={this.state.username}
                                                    onChange={this.onChangeUsername}
                                                />
                                            </div>
                                            <div className="form-group text-left">
                                                <FeatherIcon icon="lock" />
                                                <input
                                                    type="password"
                                                    placeholder="****************"
                                                    className="form-control"
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={this.onChangePassword}
                                                />
                                            </div>
                                            <div className="form-check text-left pb-3">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="remember"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="remember">Remember Me
                                            </label>
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
                <ToastsContainer store={ToastsStore} />
            </>);
    }
}

export default Login;
