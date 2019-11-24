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
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleLogin() {
    let id = this.state.username;
    let pw = this.state.password;
    this.props.onLogin(id, pw).then(success => {
      if (!success) {
        this.setState({
          password: ""
        });
      }
    });
  }

  handleRegister() {
    // let id = this.state.username;
    // let pw = this.state.password;
    // this.props.onRegister(id, pw).then(success => {
    //   if (!success) {
    //     this.setState({
    //       password: ""
    //     });
    //   }
    // });
  }

  render() {
    const inputBoxes = (
      <div>
        <input
          name="username"
          type="text"
          placeholder="아이디(이메일)"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={this.handleChange}
          value={this.state.password}
        />
      </div>
    );

    const loginView = (
      <div>
        <form onSubmit={this.handleLogin}>
          {inputBoxes}
          <input type="submit" value="로그인" />
          <Link to="/register">회원가입</Link>
        </form>
      </div>
    );

    const registerView = (
      <div>
        <form onSubmit={this.handleRegister}>
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
  isMember: PropTypes.bool,
  onLogin: PropTypes.func
  // onRegister: PropTypes.func
};

Authentication.defaultProps = {
  isMember: true,
  onLogin: (id, pw) => {
    console.error("login function not defined");
  }
  // onRegister: (id, pw) => {
  //   console.error("onRegister not defined");
  // }
};

export default Authentication;
