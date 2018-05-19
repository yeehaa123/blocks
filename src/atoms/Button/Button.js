import React, { Component } from "react";
import PropTypes from "prop-types";
import ButtonWrapper from "./ButtonWrapper";

/**
 * The button component for the Offcourse project
 */

class Button extends Component {
  handleClick = e => {
    const { onClick } = this.props;
    e.preventDefault();
    onClick();
  };

  render() {
    const {
      href,
      type,
      children,
      onClick,
      tabindex,
      variant,
      size,
      ...rest
    } = this.props;
    const buttonType = type || "button";

    const disabled = this.props.disabled || this.props.loading;
    const widths = {
      small: "6.25rem",
      medium: "9.375rem",
      large: "18.75rem"
    };

    return (
      <ButtonWrapper
        type={buttonType}
        variant={disabled ? "disabled" : variant}
        disabled={disabled}
        onClick={onClick}
        tabIndex={tabindex || 1}
        width={widths[size]}
      >
        {href ? (
          <a href={!disabled ? href : undefined}>{children}</a>
        ) : (
          children
        )}
      </ButtonWrapper>
    );
  }
}

Button.propTypes = {
  /** determines if the button should be disabled */
  disabled: PropTypes.bool,
  /** determines the status of the button */
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "positive",
    "warning",
    "negative"
  ]),
  /** the text that is displayed on the button */
  children: PropTypes.string,
  /** code that the button should execute when clicked */
  onClick: PropTypes.func,
  /** a url that the button should link to, automatically turns the button into the basic type */
  href: PropTypes.string,
  /** only accept a type prop when type is submit */
  type: PropTypes.oneOf(["submit", "button"])
};

Button.defaultProps = {
  variant: "default",
  size: "medium",
  disabled: false,
  type: "button"
};

export default Button;
