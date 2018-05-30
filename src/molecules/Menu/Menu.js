import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  values,
  map,
  compose,
  prop,
  gte,
  propSatisfies,
  filter,
  groupBy
} from "ramda";
import { mapIndexed } from "../../helpers";
import { Section, Group } from "../../atoms";
import { LinkGroup } from "../../molecules";

export default class Menu extends Component {
  static propTypes = {
    direction: PropTypes.oneOf(["horizontal", "vertical"]),
    links: PropTypes.arrayOf(PropTypes.shape),
    maxLevel: PropTypes.oneOf([0, 1, 2])
  };

  static defaultProps = {
    alignItems: "stretch",
    direction: "vertical",
    maxLevel: 2
  };

  filteredLinks() {
    const { links, maxLevel } = this.props;
    const filterByMaxLevel = filter(propSatisfies(gte(maxLevel))("level"));
    const groupByLevel = groupBy(prop("level"));
    return filterByMaxLevel(links);
  }

  groupedLinks() {
    const groupByLevel = groupBy(prop("level"));
    return values(groupByLevel(this.filteredLinks()));
  }

  render() {
    const { direction, px, justifyContent, alignItems } = this.props;
    return direction === "horizontal" ? (
      <LinkGroup
        px={px}
        justifyContent={justifyContent}
        alignItems="center"
        links={this.filteredLinks()}
        direction={direction}
      />
    ) : (
      <Group alignItems={alignItems}>
        {mapIndexed((links, index) => {
          return (
            <Section key={index}>
              <LinkGroup key={index} links={links} direction={direction} />
            </Section>
          );
        }, this.groupedLinks())}
      </Group>
    );
  }
}
