import React from "react";
import { Switch } from "react-router-dom";
import Route from "./route";
import Login from "../Pages/Login";
import Register from "../Pages/Resgister";
import Feed from "../Pages/Feed";
import Redirection from "./redirect";
import PasswordForgot from "../Pages/PaswordForgot";

const Routes: React.FC = () => {
  return(
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/registrar" component={Register} />
      <Route path="/esquici-minha-senha" component={PasswordForgot} />
      <Route path="/feed" component={Feed} isPrivate />
      <Route component={Redirection} />
    </Switch>
  );
}

export default Routes;