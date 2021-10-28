import { Switch, Route } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard";
import { Login } from "./Components/Login";

export function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}
