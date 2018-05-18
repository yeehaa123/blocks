import React, { Component } from "react";
import PropTypes from "prop-types";
import titleCase from "voca/title_case";
import lowerCase from "voca/lower_case";
import slugify from "voca/slugify";
import { Text, Avatar, Header } from "../../atoms";
import CuratorWrapper from "./CuratorWrapper";

class Curator extends Component {
  profileName() {
    const { name } = this.props;
    return titleCase(name);
  }

  renderHeader() {
    const { profileUrl } = this.props;
    return (
      <Header size="small" href={profileUrl}>
        {this.profileName()}
      </Header>
    );
  }

  render() {
    const { name, avatarUrl } = this.props;
    return (
      <CuratorWrapper>
        <Avatar url={avatarUrl} name={name} />
        <div>
          <Text small>Curated by</Text>
          {this.renderHeader()}
        </div>
      </CuratorWrapper>
    );
  }
}

Curator.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string
};

export default Curator;
