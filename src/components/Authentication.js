import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      user_pw: ""
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
    let user_id = this.state.user_id;
    let user_pw = this.state.user_pw;
    this.props.onLogin(user_id, user_pw).then(success => {
      if (!success) {
        this.setState({
          user_pw: ""
        });
      }
    });
  }

  handleRegister() {
    // let id = this.state.user_id;
    // let pw = this.state.user_pw;
    // this.props.onRegister(id, pw).then(success => {
    //   if (!success) {
    //     this.setState({
    //       user_pw: ""
    //     });
    //   }
    // });
  }

  render() {
    const inputBoxes = (
      <div>
        <input
          name="user_id"
          type="text"
          placeholder="아이디(이메일)"
          onChange={this.handleChange}
          value={this.state.user_id}
        />
        <input
          name="user_pw"
          type="user_pw"
          placeholder="비밀번호"
          onChange={this.handleChange}
          value={this.state.user_pw}
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
  onLogin: (user_id, user_pw) => {
    console.error("login function not defined");
  }
  // onRegister: (id, pw) => {
  //   console.error("onRegister not defined");
  // }
};

export default Authentication;
