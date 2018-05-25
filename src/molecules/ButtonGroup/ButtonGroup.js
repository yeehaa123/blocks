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
        variant: PropTypes.string,
        href: PropTypes.string,
        onClick: PropTypes.func,
        type: PropTypes.oneOf(["button", "submit"]),
        disabled: PropTypes.bool
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
      (props, index) => (
        <Button size={size} {...props} key={index}>
          {props.title}
        </Button>
      ),
      buttons
    );
  };

  render() {
    const { buttons, pt, justifyContent, children, direction } = this.props;
    return (
      <ButtonGroupWrapper
        flexDirection="row"
        pt={pt}
        justifyContent={justifyContent}
      >
        {isEmpty(buttons) ? children : this.renderButtons()}
      </ButtonGroupWrapper>
    );
  }
}
