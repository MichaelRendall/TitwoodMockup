import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact>
        <Home />
      </Route>
    </div>
  );
}

export default App;
