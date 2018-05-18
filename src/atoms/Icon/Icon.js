import React, { Component } from "react";
import PropTypes from "prop-types";
import fontawesome from "@fortawesome/fontawesome";
import FA from "@fortawesome/react-fontawesome";
import faAsterisk from "@fortawesome/fontawesome-free-solid/faAsterisk";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";
import faPlus from "@fortawesome/fontawesome-free-solid/faPlus";
import faSort from "@fortawesome/fontawesome-free-solid/faSort";
import faEye from "@fortawesome/fontawesome-free-solid/faEye";
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import IconWrapper from "./IconWrapper";

const icons = {
  facebook: faFacebook,
  twitter: faTwitter,
  asterisk: faAsterisk,
  remove: faTimes,
  add: faPlus,
  sort: faSort,
  hamburger: faBars,
  eye: faEye
};

/**
 * Icon Component for the Offcourse Project
 */

class Icon extends Component {
  icon() {
    const { name } = this.props;
    return icons[name];
  }

  render() {
    const { size, spin, tabIndex, name, href, is, onClick } = this.props;
    return (
      <IconWrapper
        is={is || (href && "a") || (onClick && "button")}
        type={(is === "button" && "button") || (onClick && "button")}
        tabIndex={tabIndex}
        onClick={onClick}
      >
        <FA icon={this.icon()} size={size} spin={false} />
      </IconWrapper>
    );
  }
}

const iconNames = Object.keys(icons);

Icon.propTypes = {
  /**
   * @property {string} name name of the icon
   */
  name: PropTypes.oneOf(iconNames),
  /**
   * @property {string} size size of the icon
   */
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
  ]),
  /**
   * @property {string} href url that the button should link to, automatically turns the button into the basic type
   */
  href: PropTypes.string,
  /**
   * @property {bool} spin spin indicates if the icon should be spinning
   */
  spin: PropTypes.bool,
  /**
   * @property {function} onClick callback that the button should execute when clicked
   */
  onClick: PropTypes.func
};

Icon.defaultProps = {
  size: "lg",
  spin: false
};

export default Icon;
