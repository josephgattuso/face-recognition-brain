import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = () => {
    console.log(this.state);
    this.props.onRouteChange('home');
    fetch('https://gattuso-smart-brain-api.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then(response => response.json())
      .then(user => {
        if (user === 'success') {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      });
  };

  render() {
    return (
      <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
        <main className='pa4 black-80'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0'>Sign Up</legend>
              <div className='mt3'>
                <label className='db fw4 lh-copy f6' htmlFor='name'>
                  Name
                </label>
                <input
                  className='pa2 input-reset ba bg-transparent w-100 measure'
                  id='name'
                  name='name'
                  type='name'
                  onChange={this.onNameChange}
                />
              </div>
              <div className='mt3'>
                <label className='db fw4 lh-copy f6' htmlFor='email-address'>
                  Email address
                </label>
                <input
                  className='pa2 input-reset ba bg-transparent w-100 measure'
                  id='email-address'
                  name='email-address'
                  type='email'
                  onChange={this.onEmailChange}
                />
              </div>
              <div className='mt3'>
                <label className='db fw4 lh-copy f6' htmlFor='password'>
                  Password
                </label>
                <input
                  className='b pa2 input-reset ba bg-transparent'
                  id='password'
                  name='password'
                  type='password'
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className='mt3'>
              <input
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6'
                type='submit'
                value='Sign Up'
                onClick={this.onSubmitSignIn}
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
