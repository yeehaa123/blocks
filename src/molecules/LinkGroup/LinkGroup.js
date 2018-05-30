import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEmpty, mapIndexed } from "../../helpers";
import { Link } from "../../atoms";
import LinkGroupWrapper from "./LinkGroupWrapper";

export default class LinkGroup extends Component {
  static Link = Link;

  static propTypes = {
    direction: PropTypes.oneOf(["horizontal", "vertical"]),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string,
        onClick: PropTypes.func
      })
    ),
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  };

  static defaultProps = {
    links: [],
    direction: "horizontal",
    alignItems: "flex-start"
  };

  renderLinks = () => {
    const { links } = this.props;
    return mapIndexed(
      ({ title, href, onClick }, index) => (
        <Link key={index} href={href} onClick={onClick}>
          {title}
        </Link>
      ),
      links
    );
  };

  render() {
    const {
      links,
      px,
      pt,
      pb,
      children,
      direction,
      justifyContent,
      alignItems
    } = this.props;
    return (
      <LinkGroupWrapper
        px={px}
        pt={pt}
        pb={pb}
        flexDirection={direction === "horizontal" ? "row" : "column"}
        justifyContent={justifyContent}
        alignItems={alignItems}
      >
        {isEmpty(links) ? children : this.renderLinks()}
      </LinkGroupWrapper>
    );
  }
}
