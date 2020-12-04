import React from 'react';
import { Card } from 'react-bootstrap';

const CountryList = props => {
  return (
    <div className='overflow-auto'>
      {
        props.found.map(country => 
          <Card className='d-flex flex-row my-1' 
                key={country} 
                style={{height: '2.6875rem', backgroundColor: '#0000000D', cursor: 'pointer'}}
                value={country}
                onClick={() => props.new(country)} 
                >
            <Card.Header className='rounded-left border-right-0 p-1' style={{backgroundColor: '#FFD32E'}}></Card.Header>
            <Card.Body className='p-0 m-auto'>
              {country}
            </Card.Body>
          </Card>
          )
      }
    </div>
  );
}

export default CountryList;