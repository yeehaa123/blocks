import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEmpty, mapIndexed } from "../../helpers";
import { Button } from "../../atoms";
import ButtonGroupWrapper from "./ButtonGroupWrapper";

export default class ButtonGroup extends Component {
  static Button = Button;

  static propTypes = {
    direction: PropTypes.oneOf(["horizontal", "vertical"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string,
        onClick: PropTypes.func
      })
    ),
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  };

  static defaultProps = {
    buttons: [],
    direction: "horizontal"
  };

  renderButtons = () => {
    const { buttons, size } = this.props;
    return mapIndexed(
      ({ title, variant, href, onClick }, index) => (
        <Button
          size={size}
          variant={variant}
          key={index}
          href={href}
          onClick={onClick}
        >
          {title}
        </Button>
      ),
      buttons
    );
  };

  render() {
    const { buttons, children, direction } = this.props;
    return (
      <ButtonGroupWrapper>
        {isEmpty(buttons) ? children : this.renderButtons()}
      </ButtonGroupWrapper>
    );
  }
}
