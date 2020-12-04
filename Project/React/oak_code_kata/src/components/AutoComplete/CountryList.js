import React from 'react';

const CountryList = props => {
  return (
    <ul style={{overflow: 'scroll'}}>
      {
        props.found.map(country => 
          <li key={country}>{country}</li>
          )
      }
    </ul>
  );
}

export default CountryList;