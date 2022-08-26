import React from "react";
import classes from "./User.module.css";
import { Component } from "react";

class User extends Component {
  //render method odpowiada returnowi
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

//zamieniam functional component na class component
//const User = (props) => {
//  return <li className={classes.user}>{props.name}</li>;
//};

export default User;
