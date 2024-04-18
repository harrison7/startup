import React from 'react';
import { useNavigate } from 'react-router-dom';

import './main.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  return (
    <div id="playControls">
    <div id="playerName"></div>
        <button type="button" onClick={() => navigate('/play')}>Play</button>
        <button type="button" onClick={() => logout()}>Logout</button>
    </div>
  );
}
