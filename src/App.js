import { Height } from "@material-ui/icons";
import Featured from "./components/featured";
import Footer from "./components/header_footer/Footer";
import Header from "./components/header_footer/Header";
import "./resources/styles.css";

function App() {
  return (
    <div
      className="App"
      style={{ height: "1500px", backgroundColor: "cornflowerblue" }}
    >
      <Header />
      <Featured />
    </div>
  );
}

export default App;
