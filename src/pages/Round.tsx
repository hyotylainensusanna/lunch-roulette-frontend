import * as React from "react";
import Header from "../modules/Header";
import Content from "../modules/Content";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Round = () => (
  <React.Fragment>
    <Header>
      <h1>The next lunch roulette round will be...</h1>
    </Header>
    <Content>
      <h2>Friday 1.6.2019</h2>
      <p>
        Time frame: <span className="bold">11:00 – 12:00</span>
      </p>
      <Link to="/success">
        <Button color="green" text="Sign me up for the round!" />
      </Link>
    </Content>
  </React.Fragment>
);

export default Round;
