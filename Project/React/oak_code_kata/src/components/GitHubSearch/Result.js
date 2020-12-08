import React from 'react';
import './Result.css'

const Result = props => {

  return (
    <div className="user-container">
      { !props.searchResults ?  null : props.searchResults.map(data => {
        return (
          <div className="card mb-3" style={{ width: 650}}>
            <div className="row g-0">
              <div className="col-md-4 d-flex">
                <img className="rounded-circle m-auto p-auto" src={data.img} style={{ maxWidth: 80 }}/>
              </div>
              <div className="col-md-8">
                <div className="card-body" style={{whiteSpace: 'nowrap', wordWrap: 'break-word'}}>
                  <h5 className="card-title text-info">Username : {data.user}</h5>
                  <h6 className="card-text text-primary">{`Url : ${data.url} `}</h6>
                  <h6 className="card-text text-primary">Score : {data.score}</h6>
                </div>
              </div>
            </div>
          </div>
        );
      })
      }
    </div>
  );
}

export default Result;