import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Guide } from './guide/guide';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div>
    <header>
      <h1>Elementary</h1>
      <nav>
        <NavLink className='nav-link' to=''>login</NavLink>
        <NavLink className='nav-link' to='play'>play</NavLink>
        <NavLink className='nav-link' to='guide'>guide</NavLink>
      </nav>
    </header>

    <Routes>
      <Route path='/' element={<Login />} exact />
      <Route path='/play' element={<Play />} />
      <Route path='/guide' element={<Guide />} />
      <Route path='*' element={<NotFound />} />
    </Routes>

    <footer>
      <p>About the creator</p>
      <div><a href="https://www.linkedin.com/in/harrison-casper-a945b32ab/">Harrison Casper</a></div>
      <div><a href="https://github.com/harrison7/startup">GitHub</a></div>
    </footer>
  </div>
  </BrowserRouter>
);

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}