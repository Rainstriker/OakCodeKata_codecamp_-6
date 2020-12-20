import React from 'react';
import Option from './Option.js';
import Search from './Search.js';

const Searchlist = (props) => {

  return (
    <div>
      <form className="d-flex justify-content-around w-75 m-auto p-3">
        <Option options={props.cuisineOptions} name="cuisine" des="Choose a cuisine" onChange={props.cuisine}/>
        <Option options={props.sortOptions} name="sort" des="Sort by" onChange={props.sort}/>
      </form>
      <Search data={props.restaurants}/>
    </div>
  );
}

export default Searchlist;