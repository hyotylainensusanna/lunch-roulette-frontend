import * as React from "react";
import "./Button.css";

interface Props {
  color: string;
  icon?: string;
  text: string;
}

const Button = ({ color, icon, text }: Props) => (
  <button className={`Button ${color}`}>{text}</button>
);
export default Button;
