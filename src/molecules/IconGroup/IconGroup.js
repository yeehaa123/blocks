import React, { Component } from "react";
import PropTypes from "prop-types";
import { map, addIndex, isEmpty } from "ramda";
import { Icon } from "../../atoms";

const mapIndexed = addIndex(map);

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
    ])
  };

  static defaultProps = {
    icons: []
  };

  renderIcons = () => {
    const { icons } = this.props;
    return mapIndexed(
      ({ name, onClick }, index) => (
        <Icon key={index} name={name} onClick={onClick} />
      ),
      icons
    );
  };

  render() {
    const { icons, children } = this.props;
    return <div>{isEmpty(icons) ? children : this.renderIcons()}</div>;
  }
}
