import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Base from "./Base/Base";

const App = () => {
  const Routes = (
    <Router>
      <Switch>
        <Route path="/" component={Base} exact />

        <Redirect to="/" exact/>
      </Switch>
    </Router>
  );
  return <div className="App">{Routes}</div>;
};

export default App;
