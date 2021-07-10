import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
import TheClub from "./pages/TheClub";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/membership" exact>
          <Membership />
        </Route>
        <Route path="/the-club" exact>
          <TheClub />
        </Route>
        <Route path="/news" exact>
          <News />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
