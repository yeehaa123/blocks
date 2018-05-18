import React, { Component } from "react";
import PropTypes from "prop-types";
import titleCase from "voca/title_case";
import { Label } from "..";
import MessageWrapper from "./MessageWrapper";

const background = {
  default: "grayScale.3",
  info: "primary",
  warning: "warning",
  success: "positive",
  error: "negative"
};

const textColor = {
  default: "white",
  error: "white",
  info: "white",
  warning: "text",
  success: "text"
};

class Message extends Component {
  render() {
    const { children, basic, variant } = this.props;
    return (
      <MessageWrapper
        px={basic ? 0 : 6}
        py={basic ? 0 : 4}
        bg={basic ? null : background[variant]}
        color={basic ? background[variant] : textColor[variant]}
      >
        {variant !== "default" && <Label is="span">{variant}</Label>}
        {titleCase(children)}
      </MessageWrapper>
    );
  }
}

Message.propTypes = {
  children: PropTypes.string.isRequired,
  basic: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "error", "info", "success", "warning"])
};

Message.defaultProps = {
  variant: "default"
};

export default Message;
