import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    const inputBoxes = (
      <div>
        <input
          name="username"
          type="text"
          placeholder="아이디(이메일)"
          onChange={this.handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={this.handleChange}
        />
      </div>
    );

    const loginView = (
      <div>
        <form onSubmit={this.handleSubmit}>
          {inputBoxes}
          <input type="submit" value="로그인" />
          <Link to="/register">회원가입</Link>
        </form>
      </div>
    );

    const registerView = (
      <div>
        <form onSubmit={this.handleSubmit}>
          {inputBoxes}
          <input type="submit" value="회원가입" />
        </form>
      </div>
    );

    return (
      <div>
        <h1>{this.props.isMember ? loginView : registerView}</h1>
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
