import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
import TheClub from "./pages/TheClub";
import News from "./pages/News";
import NewsHighlighted from "./pages/NewsHighlighted";
import Contact from "./pages/Contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

function App() {
  return (
    <div className="App">
      <Header />
      <main>
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
          <Route path="/news/:newsId">
            <NewsHighlighted />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
