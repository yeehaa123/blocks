import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEmpty, mapIndexed } from "../../helpers";
import { Group, Icon } from "../../atoms";

export default class IconGroup extends Component {
  static Icon = Icon;

  static propTypes = {
    icons: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func
      })
    ),
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ]),
    /** Size of the icons */
    size: PropTypes.oneOf(["small", "medium", "large"])
  };

  static defaultProps = {
    icons: []
  };

  renderIcons = () => {
    const { icons, size } = this.props;
    return mapIndexed(
      ({ name, onClick }, index) => (
        <Icon key={index} size={size} name={name} onClick={onClick} />
      ),
      icons
    );
  };

  render() {
    const { icons, children } = this.props;
    return (
      <Group groupType="icons">
        {isEmpty(icons) ? children : this.renderIcons()}
      </Group>
    );
  }
}
