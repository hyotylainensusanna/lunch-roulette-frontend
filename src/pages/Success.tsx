import * as React from "react";
import Header from "../modules/Header";
import Content from "../modules/Content";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import success from "../images/success.png";

const Success = () => (
  <React.Fragment>
    <Header color="green">
      <img src={success} alt="Rounded checkmark" />
    </Header>
    <Content>
      <h1>Sign up was successful!</h1>
      <p>
        You’ll receve an email before lunchtime on 1.6.2019 including your
        maches. <br />
        Please cancel your sign up on profile page in case you can’t make it
        afterall!
      </p>
      <Link to="/profile">
        <Button text="Go to your profile" />
      </Link>
    </Content>
  </React.Fragment>
);
export default Success;
