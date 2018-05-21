import React, { Component } from "react";
import PropTypes from "prop-types";
import { map } from "../../helpers";
import { List, CheckpointItem } from "../../molecules";

export default class CheckpointList extends Component {
  static propTypes = {};
  static defaultProps = {
    checkpoints: []
  };

  renderChildren() {
    const { checkpoints, trackable } = this.props;
    return map(
      ({ checkpointId, ...rest }) => (
        <CheckpointItem trackable={trackable} key={checkpointId} {...rest} />
      ),
      checkpoints
    );
  }

  render() {
    return <List>{this.renderChildren()}</List>;
  }
}
