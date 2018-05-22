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
    const { checkpoints, onToggle } = this.props;
    return map(
      props => (
        <CheckpointItem
          onToggle={onToggle}
          key={props.checkpointId}
          {...props}
        />
      ),
      checkpoints
    );
  }

  render() {
    return <List>{this.renderChildren()}</List>;
  }
}
