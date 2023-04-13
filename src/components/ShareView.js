import React from "react";
import Fb from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Share from "../images/icon-share.svg";

function ShareView() {
  return (
    <div className="share-view">
      <p>SHARE</p>

      <a href="https://www.facebook.com/" target="_blank">
        <img src={Fb} alt="facebook" className="fb" />
      </a>
      <a href="https://twitter.com/?lang=pl" target="_blank">
        {" "}
        <img src={Twitter} alt="twitter" className="twitter" />
      </a>
      <a href="https://pl.pinterest.com/" target="_blank">
        {" "}
        <img src={Pinterest} alt="pinterest" className="pinterest" />
      </a>
      <span />
    </div>
  );
}

export default ShareView;
