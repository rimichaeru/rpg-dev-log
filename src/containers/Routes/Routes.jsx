import React from "react";
import styles from "./Routes.module.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import DevLog from "../DevLog";
import Vision from "../Vision";
import Team from "../Team";

const Routes = () => {
  return (
    <Switch>
      <Route path="/devlog">
        <DevLog />
      </Route>
      <Route path="/vision">
        <Vision />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      <Route exact path="">
        <Redirect to="/devlog" />
      </Route>
      <Route exact path="/">
        <Redirect to="/devlog" />
      </Route>
      <Route exact path="/">
        <Redirect to="/devlog" />
      </Route>
    </Switch>
  );
};

export default Routes;
