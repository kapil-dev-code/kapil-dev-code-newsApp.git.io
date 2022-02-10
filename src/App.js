import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import MyNews from "./component/MyNews";
import Navbar from "./component/Navbar";
import { Route, Switch } from "react-router-dom";

export default function App() {
  
  return (
    
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <MyNews key='general' pageSize={10} country={"in"} category={"general"} />
        </Route>
        <Route exact path="/business">
          <MyNews key='business' pageSize={10} country={"in"} category={"business"} />
        </Route>
        <Route exact path="/entertainment">
          <MyNews key='entertainment' pageSize={10} country={"in"} category={"entertainment"} />
        </Route>
        <Route exact path="/science">
          <MyNews key='science' pageSize={10} country={"in"} category={"science"} />
        </Route>
        <Route exact path="/technology">
          <MyNews key='technology' pageSize={10} country={"in"} category={"technology"}  />
        </Route>
        <Route exact path="/health">
          <MyNews key="health" pageSize={10} country={"in"} category={"health"}  />
        </Route>
        <Route exact path="/sport">
          <MyNews key="sport" pageSize={10} country={"in"} category={"sport"} />
        </Route>
      </Switch>
    </>
  );
}
