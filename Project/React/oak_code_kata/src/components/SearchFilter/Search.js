import React from 'react';
import { Card } from 'react-bootstrap';
import './SearchFilter.css'

const Search = props => {
  return (
    <div className="restaurant-container">
      {
        props.data.map((restaurant, idx) => {
          return <Card bg="light" key={idx} style={{ width: "28.125rem", height: "15.875rem" }}>
            <Card.Body className="p-0 mx-3 f">
              <p className="cuisine-city">{restaurant["City"]}</p>
              <Card.Title className="cuisine-main p-0 m-0">{restaurant["Name"]}</Card.Title>
              <Card.Text>
                {
                  restaurant["Cuisine Style"].substring(2, restaurant["Cuisine Style"].length - 2).split("', '").map((cuisine, idx) => {
                    return <p className="cuisine" key={idx}>{cuisine}</p>
                  })
                }
              </Card.Text>
              <div className="rating-container d-flex justify-content-around border-top px-5">
                <div>
                  {restaurant["Number of Reviews"]}
                </div>
                <div>
                  {restaurant["Rating"]}
                </div>
              </div>
            </Card.Body>
          </Card>
        })
      }
    </div>
  );
}

export default Search;