import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { isEmpty, mapIndexed } from "../../helpers";
import IconGroupWrapper from "./IconGroupWrapper";
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
    direction: "horizontal",
    icons: []
  };

  renderIcons = () => {
    const { icons, size, color } = this.props;
    return mapIndexed(
      ({ name, onClick }, index) => (
        <Icon
          color={color}
          key={index}
          size={size}
          name={name}
          onClick={onClick}
        />
      ),
      icons
    );
  };

  renderChildren = () => {
    const { children, size, color } = this.props;
    return Children.map(children, child => {
      return React.cloneElement(child, { size, color });
    });
  };

  render() {
    const { icons, direction, children } = this.props;
    return (
      <IconGroupWrapper {...IconGroupWrapper.styleProps[direction]}>
        {isEmpty(icons) ? this.renderChildren() : this.renderIcons()}
      </IconGroupWrapper>
    );
  }
}
