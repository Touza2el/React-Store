import React from "react";
import "./styles.scss";

import shopmen from "./../../assets/shopmen.jpg";
import shopwomen from "./../../assets/shopwomen.jpg";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="container">
        <div className="wrap">
          <div className="item" style={{ backgroundImage: `url(${shopmen})` }}>
            <a href="/">shop men</a>
          </div>
          <div
            className="item"
            style={{ backgroundImage: `url(${shopwomen})` }}
          >
            <a href="/">shop women</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
