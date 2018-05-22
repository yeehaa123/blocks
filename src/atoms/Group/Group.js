import React, { Component } from "react";
import PropTypes from "prop-types";

class Group extends Component {
  static propTypes = {};

  render() {
    const { children, groupType } = this.props;
    return <div className={groupType}>{children}</div>;
  }
}

export default Group;
