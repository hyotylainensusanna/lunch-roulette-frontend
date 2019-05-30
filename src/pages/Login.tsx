import * as React from "react";
import Header from "../modules/Header";
import Button from "../components/Button";
import Content from "../modules/Content";
import { Link } from "react-router-dom";
import loginImage from "../images/login.png";

const Login = () => (
  <React.Fragment>
    <Header type="big">
      <img src={loginImage} alt="Two person meeting" />
      <h1>Lunch Roulette</h1>
    </Header>
    <Content>
      <Link to="/round">
        <Button color="blue" text="Log in with Google account" />
      </Link>
    </Content>
  </React.Fragment>
);
export default Login;
