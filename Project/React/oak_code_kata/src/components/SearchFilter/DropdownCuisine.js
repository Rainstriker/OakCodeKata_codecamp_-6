import React from 'react';

const cuisineArr = ['Choose Any', 'French', 'Dutch', 'Europea', 'European', 'Vegetarian Friendly', 'Gluten Free Option', 'Mediterranean', 
  'International', 'Vegan Option', 'Contemporary', 'Vegan Options', 'Asian', 'Indonesian', 'Japanese', 'Seafood', 'Fast Foo', 'American', 
  'Bar', 'Central European', 'Pu', 'Cafe', 'British', 'Healthy', 'Indian', 'Tibetan', 'Nepali', 'Italian', 'Vegetarian Friendl'];

  const DropdownCuisine = (props) => {

    const cuisineList = () => {
      return cuisineArr.map(cuisine => {
        <option value={cuisine}>{cuisine}</option>
      });
    };
    
    return (
      <select name="cuisine" id="cuisine">
        {cuisineList}
        <h5>test</h5>
      </select>
    );
  }
  
  export default DropdownCuisine;