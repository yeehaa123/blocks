import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import Shell from "./Shell";
import { Field } from "./sections";

export default class Form extends Component {
  static Field = Field;
  static FieldList = () => null;
  static propTypes = {
    initialValues: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    errors: PropTypes.object,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
      })
    ),
    mode: PropTypes.oneOf(["normal", "confirm"]),
    cancelTitle: PropTypes.string,
    submitTitle: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
  };

  renderElements(props) {
    const { children, ...rest } = this.props;
    return Children.map(children, child => {
      return React.cloneElement(child, { ...rest, ...props });
    });
  }

  render() {
    const {
      initialValues,
      title,
      errors,
      links,
      mode,
      cancelTitle,
      onCancel,
      submitTitle,
      onSubmit
    } = this.props;
    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {props => {
          return (
            <Shell
              externalErrors={errors}
              links={links}
              mode={mode}
              onCancel={onCancel}
              cancelTitle={cancelTitle}
              submitTitle={submitTitle}
              title={title}
              {...props}
            >
              {this.renderElements(props)}
            </Shell>
          );
        }}
      </Formik>
    );
  }
}
