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

  componentWillUnmount() {
    this.props.clearErrors();
  }

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
    const { formType, errors } = this.props;
    const errorLis = errors.map(error => (
      <li>{error}</li>
    ));


    return (
      <main className="session-container">
        <div className="session-form-container">
          <h1 className="session-title">{formType}</h1>
          {errors.length > 0 ? (
            <ul className="session-errors-container">{errorLis}</ul>
          ) : null}
          <form onSubmit={this.handleSubmit} noValidate>
            {formType === "Sign Up" ? (
              <label>
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  placeholder="Username"
                  required
                />
              </label>
            ) : null}

            <label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
                required
              />
            </label>

            <label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
                required
              />
            </label>
            <button type="submit" className="hvr-grow-shadow">
              {formType}
            </button>
          </form>

          {formType === "Sign Up" ? (
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          ) : (
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          )}
        </div>
      </main>
    );
  }
}

export default SessionForm;