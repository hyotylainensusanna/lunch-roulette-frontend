import * as React from "react";
import Header from "../modules/Header";
import Content from "../modules/Content";
import Button from "../components/Button";
import profile from "../images/profile.png";

const Profile = () => (
  <React.Fragment>
    <Header>
      <img src={profile} alt="Person's torso" />
      <p>susanna.hyotylainen@futurice.com</p>
    </Header>
    <Content>
      <h1>Lunch Roulette</h1>
      <p>You have signed up for the round on 1.6.2019 between 11:00 - 12:00</p>
      <Button color="coral" text="Cancel my sign up" />
    </Content>
  </React.Fragment>
);
export default Profile;
