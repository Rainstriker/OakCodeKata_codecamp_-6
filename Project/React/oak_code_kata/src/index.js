import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import WizardForm from './components/WizardForm/WizardForm.js';

ReactDOM.render(
  <div className="w-100 p-5 m-auto">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous"></link>
    <App />
    <WizardForm />
  </div>,
  document.getElementById('root')
);

