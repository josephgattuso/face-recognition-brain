import React from 'react';

const Register = ({ onRouteChange }) => {
  return (
    <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
      <main className='pa4 black-80'>
        <form action='sign-up_submit' method='get' accept-charset='utf-8'>
          <fieldset id='sign_up' class='ba b--transparent ph0 mh0'>
            <legend className='f1 fw6 ph0 mh0'>Sign Up</legend>
            <div class='mt3'>
              <label class='db fw4 lh-copy f6' for='name'>
                Name
              </label>
              <input
                class='pa2 input-reset ba bg-transparent w-100 measure'
                id='name'
                name='name'
                type='name'
              />
            </div>
            <div class='mt3'>
              <label class='db fw4 lh-copy f6' for='email-address'>
                Email address
              </label>
              <input
                class='pa2 input-reset ba bg-transparent w-100 measure'
                id='email-address'
                name='email-address'
                type='email'
              />
            </div>
            <div class='mt3'>
              <label class='db fw4 lh-copy f6' for='password'>
                Password
              </label>
              <input
                class='b pa2 input-reset ba bg-transparent'
                id='password'
                name='password'
                type='password'
              />
            </div>
          </fieldset>
          <div class='mt3'>
            <input
              class='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6'
              onClick={() => onRouteChange('home')}
              type='submit'
              value='Sign Up'
            />
          </div>
        </form>
      </main>
    </article>
  );
};

export default Register;
