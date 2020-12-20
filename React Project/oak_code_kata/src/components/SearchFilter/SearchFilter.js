import React, { useState } from 'react';
import Data, {CuisineOptions, SortOptions} from './Data.js';
import Searchlist from './Searchlist.js';
import './SearchFilter.css'

const SearchFilter = () => {
  const [restaurants, setRestaurants] = useState(Data);

  const cuisineHandle = e => {
    const term = e.target.value;
    if (term !== 'Choose Any') {
      setRestaurants(
        Data.filter(key =>{
          return key["Cuisine Style"].match(term);
        })
      );
    } else {
      setRestaurants(Data);
    }
  }

  const sortHandle = e => {
    const sortTerm = e.target.value;
    let sortedArr = [];
    if (sortTerm === 'Ranking') {
      sortedArr = restaurants.slice().sort( (a, b) => {
          return a['Ranking'] > b['Ranking'] ? 1 : -1;
        });
      } else if (sortTerm === 'Rating: Low to High') {
        sortedArr = restaurants.slice().sort( (a, b) => {
          return a['Rating'] > b['Rating'] ? 1 : -1;
        });
      } else {
        sortedArr = restaurants.slice().sort( (a, b) => {
          return a['Rating'] < b['Rating'] ? 1 : -1;
        });
      }
      setRestaurants(sortedArr);
  }

  return (
    <div className="px-5">
      <Searchlist
      //pass state
        restaurants={restaurants}
      //pass event handler
        cuisineHandle={cuisineHandle}
        cuisine={cuisineHandle}
        sort={sortHandle}
      //pass data option
        cuisineOptions={CuisineOptions}
        sortOptions={SortOptions} 
      />
    </div>
  );
}

export default SearchFilter;