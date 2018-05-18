import React, { Component } from "react";
import PropTypes from "prop-types";
import ListItemWrapper from "./ListItemWrapper";

/**
 * List Item component for the Offcourse project
 */

class ListItem extends Component {
  render() {
    const { SortHandle, children } = this.props;
    return (
      <ListItemWrapper>
        {children}
        {SortHandle && <SortHandle />}
      </ListItemWrapper>
    );
  }
}

ListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  SortHandle: PropTypes.func
};

export default ListItem;
