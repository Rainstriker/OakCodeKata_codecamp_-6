import React from 'react';

const FormInput = () => {
  return (
    <form>
      <div class="form-group">
        <input type="text" /><br />
        <input type="text" /><br />
        <input type="text" /><br />
      </div>
      <br />
      <div class="form-group">
        <input type="radio" id="male" name="gender" value="male" />
        <label for="male">Male</label><br />
        <input type="radio" id="female" name="gender" value="female" />
        <label for="female">Female</label><br />
      </div>
      <div class="form-group">
        <label>
          <h6>
            Select your destination
          </h6>
        </label><br />
        <select>
          <option key="1">--Please Choose a destination --</option>
          <option key="2">Thailand</option>
          <option key="3">Japan</option>
          <option key="4">Brazil</option>
        </select>
      </div>
      <h6>Dietary restrictions:</h6>
      <div class="form-group form-check">
        <input type="checkbox" id="nutsFree" name="dietary1" value="nuts free" />
        <label for="nutsFree" className="form-check-label">Nuts free</label><br />
        <input type="checkbox" id="lactoseFree" name="dietary2" value="lactose free" />
        <label for="lactoseFree" className="form-check-label">Lactose free</label><br />
        <input type="checkbox" id="vegan" name="dietary3" value="vegan" />
        <label for="vegan" className="form-check-label">Vegan</label><br />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default FormInput;