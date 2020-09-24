import React, {lazy} from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// const Home  = lazy(() => import('./Home/Home')); 
import Home from './Home/Home';

const App = () => {
  const Routes = (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />

        <Redirect to="/" exact/>
      </Switch>
    </Router>
  );
  return <div className="App">{Routes}</div>;
};

export default App;
