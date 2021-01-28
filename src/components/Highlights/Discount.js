import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/myButton";
class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30,
  };
  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd)
      this.setState({ discountStart: this.state.discountStart + 1 });
  };
  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>Off</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 2021 ends</h3>
              <p>
                San Francisco’s Grammy Award-winning Kronos Quartet brings a
                program of music from the original seven countries “banned” by
                the USA — Iran, Iraq, Libya, Somalia, Sudan, Syria, and Yemen
                —alongside protest music inspired by Pete Seeger.
              </p>
              <MyButton
                text="Purchase Tickets"
                bck="#ffa800"
                color="ffffff"
                link="https://www.google.co.in/"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
