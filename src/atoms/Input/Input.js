import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import titleCase from "voca/title_case";
import Icon from "../../atoms/Icon";
import { InputWrapper, OuterWrapper, TextAreaWrapper } from "./wrappers";

class Input extends Component {
  render() {
    const {
      mb,
      pt,
      pb,
      variant,
      type,
      children,
      hasErrors,
      name,
      value,
      placeholder,
      onChange,
      onBlur
    } = this.props;
    const small = variant === "small";
    const formattedPlaceholder = titleCase(placeholder);

    const fieldProps = {
      name,
      value,
      placeholder: formattedPlaceholder,
      onChange,
      onBlur
    };

    return (
      <OuterWrapper border={hasErrors ? 2 : 0} pb={pb} pt={pt} mb={mb}>
        {children && children}
        {variant === "textarea" ? (
          <TextAreaWrapper is="textarea" rows="4" {...fieldProps} />
        ) : (
          <InputWrapper
            type={type || "text"}
            fontSize={small ? 1 : 3}
            lineHeight={small ? 1 : 3}
            {...fieldProps}
          />
        )}
      </OuterWrapper>
    );
  }
}

Input.propTypes = {
  /** name of the input */
  name: PropTypes.string.isRequired,
  /** value of the input, if you set this, onChange is required*/
  value: PropTypes.string,
  /** callback that is triggered when the field changes its value */
  onChange: PropTypes.func,
  /** placeholder for absent value */
  placeholder: PropTypes.string,
  /** callback that is triggered when the field loses focus */
  onBlur: PropTypes.func,
  /** property that indicates if the field has erors */
  hasErrors: PropTypes.bool,
  /** property that changes the visual representation of the field */
  variant: PropTypes.oneOf(["default", "textarea", "small"])
};

Input.defaultProps = {
  variant: "default"
};

export default Input;
