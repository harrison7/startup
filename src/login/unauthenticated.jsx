import React from 'react';

import Button from 'react-bootstrap/Button';
import {MessageDialog} from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function login() {
    loginOrCreate(`/api/auth/login`);
  }

  async function register() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({email: userName, password: password}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <>
      <h2 id="msg">Login</h2>
        <div id="loginControls">
            <div className="login">
                <label htmlFor="email">Enter your email: </label>
                <input type="text" name="email" id="email" required onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className="login">
                <label htmlFor="pw">Enter your password: </label>
                <input type="password" name="pw" id="pw" required onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="login">
                <input type="submit" value="Log in" onClick={() => login()}/>
                <input type="submit" value="Register" onClick={() => register()}/>
            </div>
        </div>
        <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
