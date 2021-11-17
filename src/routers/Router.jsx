import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import Account from "../components/AccountBox/Account"
import ChatRoom from "../pages/ChatRoom";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={ChatRoom} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/login/account" exact component={Account} />
    </Switch>
  );
};

export default Router;
