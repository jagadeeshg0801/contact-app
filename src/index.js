import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div style={{ marginTop: '100px' }}>
      
      <nav className='nav-link ' >
        <Link to='/' >Contact List</Link>
        <Link to='/add'>Add Contact</Link>
      </nav>
    </div>

    <App />
    <div className='footer-pane'>
    <div><b>Note:</b> <i>In this app,For Routing implementation I used react-router-dom:^5.2.0 version [if we go with latest version, then need changes in router configuration, Please follow API Doc from reactjs]</i></div>
    </div>
  </BrowserRouter>
);


