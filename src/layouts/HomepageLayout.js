import React from "react";

import Header from "./../components/Header";
import Footer from "./../components/Footer";

const HomepageLayout = (props) => {
  return (
    <div className="main-layout">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
