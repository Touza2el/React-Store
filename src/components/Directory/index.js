import React from "react";
import "./styles.scss";

import men from "./../../assets/shopmen.jpg";
import women from "./../../assets/shopwomen.jpg";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${men})` }}>
          <a href="/">men</a>
        </div>
        <div className="item" style={{ backgroundImage: `url(${women})` }}>
          <a href="/">women</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
