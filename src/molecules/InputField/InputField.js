import React, { Component } from "react";
import PropTypes from "prop-types";
import { Section, Label, Input } from "../../atoms";
import { isEmpty } from "ramda";
import { MessageGroup, IconGroup } from "../../molecules";
import InputFieldWrapper from "./InputFieldWrapper";

export default class InputField extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    touched: PropTypes.array,
    errors: PropTypes.array,
    variant: PropTypes.oneOf(["default", "textarea", "small"])
  };

  static defaultProps = {
    errors: [],
    touched: []
  };

  renderLabel() {
    const { title } = this.props;
    return title ? (
      <Label pb={4} px={6} htmlFor={name}>
        {title}
      </Label>
    ) : null;
  }

  hasErrors() {
    const { errors } = this.props;
    return !isEmpty(errors);
  }

  renderErrors() {
    const { errors } = this.props;
    return this.hasErrors() ? (
      <MessageGroup px={6} pb={6} basic errors={errors} />
    ) : null;
  }

  renderChildren() {
    const {
      name,
      placeholder,
      value,
      onChange,
      onBlur,
      type,
      children,
      variant,
      handles
    } = this.props;

    return children ? (
      children
    ) : (
      <Input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        mb={3}
        hasErrors={this.hasErrors()}
        variant={variant}
      >
        {handles && <div className="handles">{handles}</div>}
      </Input>
    );
  }

  render() {
    return (
      <InputFieldWrapper>
        {this.renderLabel()}
        {this.renderErrors()}
        {this.renderChildren()}
      </InputFieldWrapper>
    );
  }
}
