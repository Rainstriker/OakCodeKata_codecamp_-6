import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

const searchIcon = <SearchOutlined />;

const SearchUser = props => {
  return (
    <div className="d-flex justify-content-center pb-2">
      <form>
        <input  type='search'
              onChange={props.onChange}
              placeholder="Type Username here"
        />
        <button type="submit" onClick={props.onSearch}>{searchIcon}</button>
      </form>
    </div>
  );
}

export default SearchUser;