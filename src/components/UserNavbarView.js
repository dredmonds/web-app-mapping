import React from 'react';

export default function UserNavbarView() {
  return (
    <div className="topnav">
      <div className="search-container">
        <form className="form-box">
          <input type="text" placeholder="London"></input>
          <select>
            <option value="0">50miles</option>
          </select>
          <button type="submit"><i className="fa fa-search"/></button>
        </form>
      </div>
    </div>
  );
}