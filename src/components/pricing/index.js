import React, { Component } from "react";
import MyButton from "../utils/myButton";
import Zoom from "react-reveal/Zoom";
class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Award winning Canadian music industry veteran Rob Cyrynowski is pleased to announce the launch of Hotels Live, a promoter arm of Livestar Entertainment Canada in partnership.",

      "This innovative concept developed by Showpass, reinvents the venue model as we know it, offering an exclusive safe concert experience, topped off with a hotel night stay.",
      "Hotels Live will be the first to bring this idea to life and aims to host a variety of Hotel Balcony Concerts across Canada this summer of Livestar with a hotel night stay",
    ],
    linkto: [
      "https://www.hotelslive.ca",
      "https://www.hotelslive.ca",
      "https://www.hotelslive.ca",
    ],
    delay: [500, 0, 500],
  };
  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_button">
              <MyButton
                text="Purchase"
                bck="#ffa800"
                color="ffffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
