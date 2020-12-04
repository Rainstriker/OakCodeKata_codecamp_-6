import React from 'react';
import NavBar from '../NavBar/NavBar.js';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home.js'
import CardList from '../CardList/CardList.js';
import WizardForm from '../WizardForm/WizardForm.js';
import AutoComplete from '../AutoComplete/AutoComplete.js'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route exact path='/' component={Home}/>
      <Route path='/card_list' component={CardList}/>
      <Route path='/wizard_form' component={WizardForm}/>
      <Route path='/auto_complete' component={AutoComplete}/>
    </React.Fragment>
  );
}

export default App;
