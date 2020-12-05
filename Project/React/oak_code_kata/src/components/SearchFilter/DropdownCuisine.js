import React from 'react';

const cuisineArr = ['Choose Any', 'French', 'Dutch', 'Europea', 'European', 'Vegetarian Friendly', 'Gluten Free Option', 'Mediterranean',
  'International', 'Vegan Option', 'Contemporary', 'Vegan Options', 'Asian', 'Indonesian', 'Japanese', 'Seafood', 'Fast Foo', 'American',
  'Bar', 'Central European', 'Pu', 'Cafe', 'British', 'Healthy', 'Indian', 'Tibetan', 'Nepali', 'Italian', 'Vegetarian Friendl'];

const DropdownCuisine = (props) => {

  const rankingList = () => {

  }

  const cuisineList = () => {
    const cusineOption = cuisineArr.map((cuisine, idx) => {
      return <option value={cuisine} key={idx}>
        {cuisine}
      </option>
    });
    return cusineOption;
  };

  return (
    <div>
      <div>
        <labe>Choose a cuisine : </labe>
        <select name="cuisine" id="cuisine" onChange={props.select}>
          {cuisineList()}
        </select>
      </div>
      <div>
        <labe>Sort by : </labe>
        <select name="ranking" id="ranking">
          <option>Ranking</option>
          <option>Rating: Low to High</option>
          <option>Rating: High to Low</option>
        </select>
      </div>
    </div>

  );
}

export default DropdownCuisine;