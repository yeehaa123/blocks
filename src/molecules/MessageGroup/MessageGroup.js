import React, { Component } from "react";
import PropTypes from "prop-types";
import { map, addIndex, isEmpty } from "ramda";
import { Message } from "../../atoms";
import MessageGroupWrapper from "./MessageGroupWrapper";

const mapIndexed = addIndex(map);

export default class MessageGroup extends Component {
  static Message = Message;

  static propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        message: PropTypes.string.isRequired,
        variant: PropTypes.oneOf([
          "default",
          "error",
          "info",
          "success",
          "warning"
        ])
      })
    ),
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  };

  static defaultProps = {
    messages: [],
    errors: []
  };

  renderMessages = () => {
    const { messages, basic } = this.props;
    return mapIndexed(
      ({ message, variant }, index) => (
        <Message basic={basic} variant={variant} key={index}>
          {message}
        </Message>
      ),
      messages
    );
  };
  renderErrors = () => {
    const { errors, basic } = this.props;
    return mapIndexed(
      (message, index) => (
        <Message basic={basic} variant="error" key={index}>
          {message}
        </Message>
      ),
      errors
    );
  };

  render() {
    const { messages, px, pb, errors, children } = this.props;
    return (
      <MessageGroupWrapper px={px} pb={pb}>
        {!isEmpty(messages) && this.renderMessages()}
        {!isEmpty(errors) && this.renderErrors()}
        {children}
      </MessageGroupWrapper>
    );
  }
}