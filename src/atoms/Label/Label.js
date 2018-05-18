import React, { Component } from "react";
import PropTypes from "prop-types";
import titleCase from "voca/title_case";
import LabelWrapper from "./LabelWrapper";

class Label extends Component {
  render() {
    const { children, px, pb, is } = this.props;
    const label = titleCase(children);
    return (
      <LabelWrapper is={is} pb={pb} px={px}>
        {label}
      </LabelWrapper>
    );
  }
}

Label.propTypes = {
  /** The actual text of the label */
  children: PropTypes.string.isRequired
};

export default Label;
