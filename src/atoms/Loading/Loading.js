import React, { Component } from "react";
import PropTypes from "prop-types";
import FA from "@fortawesome/react-fontawesome";
import faAsterisk from "@fortawesome/fontawesome-free-solid/faAsterisk";

class Loading extends Component {
  render() {
    const { size } = this.props;
    return <FA icon={faAsterisk} size={size} spin />;
  }
}

Loading.propTypes = {
  size: PropTypes.oneOf([
    "xs",
    "sm",
    "lg",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x"
  ])
};

Loading.defaultProps = {
  size: "lg"
};

export default Loading;
