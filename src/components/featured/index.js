import React, { Component } from "react";
import Carrousel from "./Carrousel";
import CountDown from "./CountDown";
const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carrousel />
      <CountDown />
      <div className="artist_name">
        <div className="wrapper">Drake</div>
      </div>
    </div>
  );
};

export default Featured;
