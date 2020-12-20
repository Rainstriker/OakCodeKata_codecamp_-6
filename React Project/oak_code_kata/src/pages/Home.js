 import React, { useEffect, useState } from 'react';
 import Result from '../components/GitHubSearch/Result.js';
 import GitHub from '../util/GitHub.js';
 
 const Home = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const search = () => {
      const term = 'Rainstriker';
      window.sessionStorage.searchTerm = term;
      GitHub.search(term).then(data => 
        setData(data)
        );
    }
    search();
  }, [])



   return (
     <div style={{margin: 'auto', width: '100%', textAlign: 'center', paddingTop: '25vh'}}>
       <h1>Oak Code Kata React Project by Pookan</h1>
       <div style={{margin: 'auto', display: 'flex', paddingTop: '5vh'}}>
        <Result searchResults={data}/>
       </div>
     </div>
   );
 }
 
 export default Home;