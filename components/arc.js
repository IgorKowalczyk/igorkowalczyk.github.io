import { Component } from "react";

export default class Arc extends Component {
 render() {
  if (process.env.NODE_ENV === "production") {
   return <script async src="https://arc.io/widget.min.js#SPwnFAcS"></script>;
  } else {
   return;
  }
 }
}
