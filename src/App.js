import { Height, Highlight } from "@material-ui/icons";
import Featured from "./components/featured";
import Footer from "./components/header_footer/Footer";
import Header from "./components/header_footer/Header";
import Highlights from "./components/Highlights";
import Location from "./components/location";
import Pricing from "./components/pricing";
import Venue from "./components/venue";
import "./resources/styles.css";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App" style={{ height: "1500px" }}>
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venueinfo">
        <Venue />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
