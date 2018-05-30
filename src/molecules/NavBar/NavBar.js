import React, { Component } from "react";
import PropTypes from "prop-types";
import { Logo, Icon } from "../../atoms";
import { Menu } from "../../molecules";
import NavBarWrapper from "./NavBarWrapper";

export default class NavBar extends Component {
  static Logo = Logo;
  static MenuButton = ({ onClick, isOpen }) => {
    return <Icon name="hamburger" onClick={onClick} />;
  };
  static propTypes = {};

  render() {
    const { children, position } = this.props;
    return <NavBarWrapper position={position}>{children}</NavBarWrapper>;
  }
}
