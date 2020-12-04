import React, { useState } from 'react';
import Data from './Data.js';
import DropdownCuisine from './DropdownCuisine.js';

const SearchFilter = () => {
  const [cuisine, setCuisine] = useState('Choose Any');
  const [ranking, setRanking] = useState('Ranking');
  const [filteredCuisine, setFilteredCuisine] = useState([]);
  const [sortedRanking, setSortedRanking] = useState([]);
  
  const filterCuisine = () => {
    const matchRestaurant = Data.filter(restaurant => restaurant['Cuisine Style'].match(`/${cuisine}/i`));
    setFilteredCuisine(matchRestaurant);
  };

  const sortRanking = (sortType) => {
    if (sortType === 'Rating: Low to High') {
      setSortedRanking( sortLowToHigh(filteredCuisine) );
    } else if (sortType === 'Rating: High to Low') {
      setSortedRanking( sortHighToLow(filteredCuisine) );
    } else {
      setSortedRanking( filteredCuisine );
    }
  };

  const sortHighToLow = () => {
    const matchRestaurant = Data.sort((a, b) => {
      return (a["Rating"] > b["Rating"]) ? 1 : -1;
    });
    setSortedRanking(matchRestaurant);
  };

  const sortLowToHigh = () => {
    const matchRestaurant = Data.sort((a, b) => {
      return (a["Rating"] < b["Rating"]) ? 1 : -1;
    });
    setSortedRanking(matchRestaurant);
  };
  

  return (
    <div>
      <DropdownCuisine />
    </div>
  );
}

export default SearchFilter;