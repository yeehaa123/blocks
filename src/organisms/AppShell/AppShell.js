import React, { Component } from "react";
import PropTypes from "prop-types";
import { Logo, Group } from "../../atoms";
import { NavBar, Menu, Sidebar } from "../../molecules";

const MenuButton = NavBar.MenuButton;

export default class AppShell extends Component {
  static propTypes = {
    position: PropTypes.oneOf(["fixed", "absolute"]),
    links: PropTypes.array,
    toggle: PropTypes.func,
    isSidebarOpen: PropTypes.bool
  };

  static defaultProps = {
    position: "fixed",
    links: [],
    isSidebarOpen: false
  };

  render() {
    const { links, position, children, isSidebarOpen, toggle } = this.props;
    const content = <Menu links={links} />;
    return (
      <Sidebar content={content} toggle={toggle} isOpen={isSidebarOpen}>
        <NavBar position={position}>
          <Logo />
          <Group flexDirection="row" alignItems="center">
            <Menu
              justifyContent="flex-end"
              px={6}
              maxLevel={1}
              direction="horizontal"
              links={links}
            />
            <MenuButton onClick={toggle} />
          </Group>
        </NavBar>
        <Group mt={8}>{children}</Group>
      </Sidebar>
    );
  }
}
