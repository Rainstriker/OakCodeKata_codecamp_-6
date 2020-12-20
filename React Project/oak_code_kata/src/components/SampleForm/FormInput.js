import React from 'react';

const FormInput = props => {
  return (
    <form className="p-3" style={{backgroundColor: "#DEB887"}}>
      <div className="form-group">
        <input className="w-50" type="text" placeholder="First Name" onChange={props.firstName}/>
      </div>
      <div className="form-group">
        <input className="w-50" type="text" placeholder="Last Name" onChange={props.lastName}/>
      </div>
      <div className="form-group">
        <input className="w-50" type="text" placeholder="Age" onChange={props.age}/>
      </div>
      <br />
      <div className="form-group">
        <div class="form-check">
          <input className="form-check-input" type="radio" id="male" name="gender" value="male" onChange={props.gender}/>
          <label className="form-check-label" for="male">Male</label>
        </div>
        <div class="form-check">
          <input className="form-check-input" type="radio" id="female" name="gender" value="female" onChange={props.gender}/>
          <label className="form-check-label" for="female">Female</label>
        </div>
      </div>
      <div className="form-group">
        <label>
          <h6>
            Select your destination
          </h6>
        </label>
        <select className="form-control w-25" onChange={props.destination}>
          <option key="1" value="">--Please Choose a destination --</option>
          <option key="2">Thailand</option>
          <option key="3">Japan</option>
          <option key="4">Brazil</option>
        </select>
      </div>
      <h6>Dietary restrictions:</h6>
      <div className="form-group form-check">
        <input className="form-check-input" type="checkbox" id="nutsFree" name="dietary1" onChange={props.nutsFree}/>
        <label className="form-check-label" for="nutsFree" className="form-check-label">Nuts free</label><br />
        <input className="form-check-input" type="checkbox" id="lactoseFree" name="dietary2" onChange={props.lactoseFree}/>
        <label className="form-check-label" for="lactoseFree" className="form-check-label">Lactose free</label><br />
        <input className="form-check-input" type="checkbox" id="vegan" name="dietary3" onChange={props.isVegan}/>
        <label className="form-check-label" for="vegan" className="form-check-label">Vegan</label><br />
      </div>
      <button type="submit" className="btn btn-primary" onSubmit={props.submit}>Submit</button>
    </form>
  );
}

export default FormInput;