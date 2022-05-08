import { Component } from "react";

export default class Arc extends Component {
 render() {
  if (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_ARC_TOKEN) {
   return <script async src={"https://arc.io/widget.min.js#" + process.env.NEXT_PUBLIC_ARC_TOKEN}></script>;
  } else {
   return;
  }
 }
}
