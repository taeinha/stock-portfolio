import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  // componentWillUnmount() {
  //   this.props.clearErrors();
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state)
      .then(() => this.props.history.push('/'));
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  demoUser(e) {
    e.preventDefault();
    this.setState({ email: 'demouser@gmail.com', password: 'abcdef' });
  }

  render() {
    const { formType } = this.props;

    return (
      <main className="session-container">
        <div className="session-form-container">
          <h1 className="session-title">{formType}</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            {formType === "Sign Up" ? (
              <label>
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="Username"
                  required
                />
                {/* Error */}
              </label>
            ) : null}

            <label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                required
              />
              {/* Error */}
            </label>

            <label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                required
              />
              {/* Error */}
            </label>
            <button type="submit">{formType}</button>
          </form>

          {formType === "Sign Up" ? (
            <p>Already have an account? <Link to="/login">Sign in</Link></p>
          ) : (
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          )}
        </div>
      </main>
    );
  }
}

export default SessionForm;