import React, { Component, Children } from "react";
import titleCase from "voca/title_case";
import PropTypes from "prop-types";
import HeaderWrapper from "./HeaderWrapper";

/**
 * @name Header
 * @description Header Component
 */

class Header extends Component {
  render() {
    const { children, href, size } = this.props;
    return (
      <HeaderWrapper
        is={href ? "a" : "h1"}
        href={href}
        lineHeight={size === "small" ? 1 : 2}
        fontSize={size === "small" ? 2 : 3}
      >
        {titleCase(children)}
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  /**
   * @property {string} children The actual text of the header
   */
  children: PropTypes.string.isRequired,
  /**
   * @property {string} size Field that indicates the size of the header
   */
  size: PropTypes.oneOf(["small", "regular"]),
  /**
   * @property {string} href Headers can optionally link to other documents, etc
   */
  href: PropTypes.string
};

Header.defaultProps = {
  size: "regular"
};

export default Header;
