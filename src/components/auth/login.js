import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {userLoginViaApi} from "../../actions/login";

class LoginForm extends Component {
  handleLogin = event => {
    event.preventDefault();
    const email = this.email.value.trim();
    const password = this.password.value.trim();
    const credentials = {email: email, password: password};
    this.props.dispatch(userLoginViaApi(credentials));
  };

  render(){
    return(
      <div className="container-fluid" id="main-container">

        <div className="row">
          <div className="auth-card card-1">
            <form className="form-horizontal" onSubmit={this.handleLogin}>
              <h3 id="auth-header">LOGIN</h3>
              <div className="form-group">
                <input
                  type="email"
                  ref={(input) => this.email = input}
                  className="form-control in-focus"
                  placeholder="Enter email address..."
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  ref={(input) => this.password = input}
                  className="form-control in-focus"
                  placeholder="Enter password..."
                />
              </div>
              <div className="form-group">
                <button type="submit" id="sign-in-button" className="btn btn-default btn-block create-bucket-button">
                  SIGN IN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default LoginForm;

