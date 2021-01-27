import { Height, Highlight } from "@material-ui/icons";
import Featured from "./components/featured";
import Footer from "./components/header_footer/Footer";
import Header from "./components/header_footer/Header";
import Highlights from "./components/Highlights";
import Venue from "./components/venue";
import "./resources/styles.css";

function App() {
  return (
    <div className="App" style={{ height: "1500px" }}>
      <Header />
      <Featured />
      <Venue />
      <Highlights />
    </div>
  );
}

export default App;
