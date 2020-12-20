import React, { useEffect, useState } from 'react';
import GitHub from '../../util/GitHub.js';
import SearchUser from './SearchUser.js';
import Result from './Result.js';

const GitHubSearch = () => {
  const [term, setTerm] = useState('');
  const [data, setData] = useState('');

  const handleTermChange = e => {
    setTerm(e.target.value);
  }

  const search = event => {
    event.preventDefault();
    window.sessionStorage.searchTerm = term;
    GitHub.search(term).then(data => 
      setData(data)
    )
    
  }

  return (
    <div className="px-4 p-4">
      <SearchUser onChange={handleTermChange} onSearch={search}/>
      <Result searchResults={data}/>
    </div>
  );
}

export default GitHubSearch;