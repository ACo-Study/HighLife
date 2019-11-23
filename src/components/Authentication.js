import React, { Component } from "react";
import PropTypes from "prop-types";

class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const inputBoxes = (
            <div>
                <label>Username</label>
                <input
                    name="username"
                    type="text"
                    className="validate"
                    onChange={this.handleChange}
                    value={this.state.username}
                />
                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    className="validate"
                    onChange={this.handleChange}
                    value={this.state.password}
                />
            </div>
        );

        const loginView = (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="Submit" />
                    <Link to="/register">회원가입</Link>
                </form>
            </div>
        );

        const registerView = (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );

        return (
            <div>
                <h1>{this.props.isMember ? "로그인" : "회원가입"}</h1>
            </div>
        );
    }
}

Authentication.propTypes = {
    isMember: PropTypes.bool
};

Authentication.defaultProps = {
    isMember: true
};

export default Authentication;
