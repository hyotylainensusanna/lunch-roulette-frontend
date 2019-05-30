import * as React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export interface Props {
  children?: any;
  type?: string;
  color?: string;
}

const Header = ({ children, type, color }: Props) => (
  <header
    className={`Header ${type === "big" ? "big" : ""} ${color ? color : ""}`}
  >
    <div className="Header-links">
      <Link to="profile">Profile</Link>
      <Link to="logout">Logout</Link>
    </div>
    {children}
  </header>
);
export default Header;
