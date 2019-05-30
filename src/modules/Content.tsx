import * as React from "react";
import "./Content.css";

interface Props {
  children: any;
}
const Content = ({ children }: Props) => (
  <section className="Content">{children}</section>
);
export default Content;
