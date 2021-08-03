import styles from "./App.module.scss";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes"
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
