import React from "react";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the perfect freelance services for your business</h1>
          <div className="search">
            <div className="searchInput">
              <img src="" alt=""/>
              <input type="text" placeholder='Try "build your project"'/>
              <button>Search</button>
            </div>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">

        </div>
      </div>
    </div>
  )
}
