import styles from "./App.module.scss";
import "./App.scss";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes"
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {

  return (
    <Router basename="/">
      <Nav />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
