import React, { Component } from "react";
import PropTypes from "prop-types";
import { map, addIndex, isEmpty } from "ramda";
import { Tag } from "../../atoms";
import TagGroupWrapper from "./TagGroupWrapper";

const mapIndexed = addIndex(map);

export default class TagGroup extends Component {
  static Tag = Tag;

  static propTypes = {
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        message: PropTypes.string.isRequired,
        variant: PropTypes.oneOf([
          "default",
          "error",
          "info",
          "success",
          "warning"
        ])
      })
    ),
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  };

  static defaultProps = {
    tags: []
  };

  renderTags = () => {
    const { tags } = this.props;
    return mapIndexed((text, index) => <Tag key={index}>{text}</Tag>, tags);
  };

  render() {
    const { tags, children } = this.props;
    return (
      <TagGroupWrapper>
        {isEmpty(tags) ? children : this.renderTags()}
      </TagGroupWrapper>
    );
  }
}
