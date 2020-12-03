import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import WizardForm from './components/WizardForm/WizardForm.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div className="w-100 p-5 m-auto">
      
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

