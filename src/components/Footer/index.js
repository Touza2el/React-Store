import React from "react";
import "./styles.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>copyright &copy; 2020 created by touza2el</p>
          <div className="footer-content-right">
            <p>| privacy policy</p>
            <p>| terms & conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
