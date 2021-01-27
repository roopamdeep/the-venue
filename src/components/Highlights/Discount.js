import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
const Discount = () => {
  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade>
          <div className="discount_porcentage">
            <span>23%</span>
            <span>Off</span>
          </div>
        </Fade>
        <Slide right>
          <div className="discount_description">
            <h3>Purchase tickets before 2021 ends</h3>
            <p>
              San Francisco’s Grammy Award-winning Kronos Quartet brings a
              program of music from the original seven countries “banned” by the
              USA — Iran, Iraq, Libya, Somalia, Sudan, Syria, and Yemen
              —alongside protest music inspired by Pete Seeger.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
