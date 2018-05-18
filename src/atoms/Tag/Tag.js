import React, { Component } from "react";
import PropTypes from "prop-types";
import titleCase from "voca/title_case";
import lowerCase from "voca/lower_case";
import Text from "../../atoms/Text";
import TagWrapper from "./TagWrapper";

/**
 * The Tag component for the Offcourse project
 */

class Tag extends Component {
  format() {
    return titleCase(lowerCase(this.props.children));
  }

  render() {
    return (
      <TagWrapper href={this.props.href}>
        <Text size="small">{this.format()}</Text>
      </TagWrapper>
    );
  }
}

Tag.propTypes = {
  /** the text that is displayed on the tag */
  children: PropTypes.string.isRequired,
  /** a url that the tag links to */
  href: PropTypes.string
};

export default Tag;
