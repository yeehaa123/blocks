import React, { Component } from "react";
import PropTypes from "prop-types";
import lowerCase from "voca/lower_case";
import AvatarWrapper from "./AvatarWrapper";

/**
 * @name Avatar
 * @description a react component that shows the avatar image of a given user
 */

class Avatar extends Component {
  render() {
    let { url, name } = this.props;
    return <AvatarWrapper src={url} alt={`avatar of ${lowerCase(name)}`} />;
  }
}

Avatar.propTypes = {
  /**
   * url that refers to an avatar image
   * */
  url: PropTypes.string,
  /**
   * name of the person corresponding to this avatar
   */
  name: PropTypes.string.isRequired
};

Avatar.defaultProps = {
  url: "https://assets.offcourse.io/portraits/offcourse_2.jpg"
};

export default Avatar;
