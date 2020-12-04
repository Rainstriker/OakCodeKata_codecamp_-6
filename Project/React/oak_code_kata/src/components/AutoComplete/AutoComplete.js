import React, { useState } from 'react';
import Countries from './Countries.js';
import CountryList from './CountryList.js';
import { Form, Card } from 'react-bootstrap';

const AutoComplete = () => {
  const [term, setTerm] = useState('');
  const [found, setFound] = useState([]);

  const search = (e) => {
    const term = e.target.value;
    setTerm(term);
    const found = Countries.filter(country =>
      country.toLowerCase().startsWith(term.toLowerCase())
    );
    term === '' ? setFound([]) : setFound(found);
  }

  const newTerm = term => {
    setTerm(term);
    setFound([]);
  }

  return (
    <Form className='d-flex justify-content-center' style={{ marginTop: '50px'}}>
      <div className='align-self-center'>
        <Card className='p-3' style={{
          width: '23.875rem',
          maxHeight: '30.125rem',
          minHeight: '9.300625rem',
          height: '100%',
          textAlign: 'center',
          backgroundColor: '#F5F5F5',
        }}>
          <h4>Auto Completed</h4>
          <input type='text' onChange={search} value={term}/>
          <hr style={{ marginTop: 10, marginBottom: 0}}/>
          <CountryList found={found} new={newTerm}/>
        </Card>
        <Card.Header className='rounded-bottom border border-warning'
          style={{ width: '23.875rem', backgroundColor: '#FFD32E', height: '2.6875rem', textAlign: 'center' }}>
          Suggestions: {found.length}
        </Card.Header>
      </div>
    </Form>
  );
}

export default AutoComplete;