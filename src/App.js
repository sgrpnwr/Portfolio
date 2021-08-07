import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Photography from "./components/Photography";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/photography" component={Photography} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
