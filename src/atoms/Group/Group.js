import React, { Component } from "react";
import PropTypes from "prop-types";

class Group extends Component {
  static propTypes = {};

  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

export default Group;
