import React from 'react';

const SearchArea = () =>
  <div className="row container" id="search-container">
    <div className="col-lg-12">
      <div className="input-group input-group-lg">
        <input type="text" className="form-control input-lg" id="search-input" placeholder="Search Bucket lists . . ."/>
        <span className="input-group-btn">
          <button className="btn btn-default btn-lg" id="search-button" type="submit">SEARCH</button>
        </span>
      </div>
    </div>
  </div>;


export default SearchArea;