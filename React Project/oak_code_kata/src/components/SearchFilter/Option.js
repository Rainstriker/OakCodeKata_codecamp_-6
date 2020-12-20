import React from 'react';

const Option = props => {
  return (
    <div>
      <label className="px-2">{`${props.des} :`}</label>
      <select name={props.name} id={props.name} onChange={props.onChange}> 
      {props.options.map((key, idx) => {
          return  <option value={key} key={idx}>
                    {key}
                  </option>
        })
      }
      </select>
    </div>
    
  );
}

export default Option;