import React, { Component, useState } from "react";
import Share from "../images/icon-share.svg";
import ShareView from "./ShareView";
import Share2 from "../images/icon-share2.svg";

function Comment() {
  const [share, setShare] = useState("view1");

  const shareMessage = (view) => {
    setShare(view);
  };
  console.log(share);
  return (
    <div className="comment">
      <div className="circle"></div>
      <div className="name-date">
        <h2>Michelle Appleton </h2>
        <p>28 Jun 2020</p>
      </div>
      <div
        className={`circle-share ${share === "view2" ? "active-share" : ""}`}
        onClick={() => shareMessage("view2")}
      >
        <img
          src={share === "view2" ? Share2 : Share}
          alt="share"
          className="share"
        />
        <div> {share === "view2" ? <ShareView /> : ""}</div>
      </div>
    </div>
  );
}

export default Comment;
