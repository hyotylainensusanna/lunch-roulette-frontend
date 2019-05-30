import * as React from "react";
import Header from "../modules/Header";
import Button from "../components/Button";
import Content from "../modules/Content";
import { Link } from "react-router-dom";

const Logout = () => (
  <React.Fragment>
    <Header type="big">
      <h1>You have successfully logged out!</h1>
    </Header>
    <Content>
      <Link to="/">
        <Button color="blue" text="Go to login page" />
      </Link>
    </Content>
  </React.Fragment>
);
export default Logout;
