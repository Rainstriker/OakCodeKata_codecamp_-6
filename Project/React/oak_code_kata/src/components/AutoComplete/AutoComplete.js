import React, { useState } from 'react';
import Countries from './Countries.js';
import CountryList from './CountryList.js';
import { Form, Card } from 'react-bootstrap';

const AutoComplete = () => {
  const [term, setTerm] = useState('term');
  const [found, setFound] = useState([]);

  const search = (e) => {
    const term = e.target.value;
    const found = Countries.filter(country =>
      country.toLowerCase().startsWith(term.toLowerCase())
    );
    term === '' ? setFound([]) : setFound(found);
    setTerm(term);

  }

  return (
    <Form style={{margin: '0 auto'}}>
      <Card style={{ width: '23.875rem', maxHeight: '30.125rem', minHeight: '9.300625rem', height: '100%'}}>
        <h3>Auto Completed</h3>
        <input type='text' onChange={search} />
        <CountryList found={found} />
      </Card>
    </Form>
  );
}

export default AutoComplete;