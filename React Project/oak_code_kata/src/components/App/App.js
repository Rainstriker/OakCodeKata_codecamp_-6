import React from 'react';
import NavBar from '../NavBar/NavBar.js';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home.js'
import CardList from '../CardList/CardList.js';
import WizardForm from '../WizardForm/WizardForm.js';
import AutoComplete from '../AutoComplete/AutoComplete.js';
import GitHubSearch from '../GitHubSearch/GitHubSearch.js';
import SearchFilter from '../SearchFilter/SearchFilter.js';
import SampleForm from '../SampleForm/SampleForm.js';
import ValidatedForm from '../ValidatedForm/ValidatedForm.js';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route exact path='/' component={Home}/>
      <Route path='/card_list' component={CardList}/>
      <Route path='/wizard_form' component={WizardForm}/>
      <Route path='/auto_complete' component={AutoComplete}/>
      <Route path='/github_search' component={GitHubSearch}/>
      <Route path='/search_filter' component={SearchFilter}/>
      <Route path='/sample_form' component={SampleForm}/>
      <Route path='/validated_form' component={ValidatedForm}/>
    </React.Fragment>
  );
}

export default App;
