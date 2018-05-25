import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import Shell from "./Shell";
import { Field, FieldList } from "./sections";

export default class Form extends Component {
  static Field = Field;
  static FieldList = FieldList;

  static propTypes = {
    /** predefined values for the form */
    initialValues: PropTypes.object.isRequired,
    /** title of the form */
    title: PropTypes.string.isRequired,
    /** object with external errors */
    errors: PropTypes.object,
    /** object that defines the links to other forms */
    links: PropTypes.arrayOf(
      PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
      })
    ),
    buttons: PropTypes.objectOf(
      PropTypes.shape({
        href: PropTypes.string,
        type: PropTypes.string,
        size: PropTypes.oneOf(["small", "medium", "large"]),
        onClick: PropTypes.func,
        title: PropTypes.string,
        variant: PropTypes.oneOf([
          "default",
          "primary",
          "positive",
          "warning",
          "negative"
        ])
      })
    ),
    mode: PropTypes.string,
    cancelTitle: PropTypes.string,
    submitTitle: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
  };

  renderElements(props) {
    const { children, title, ...rest } = this.props;
    return Children.map(children, child => {
      return child && React.cloneElement(child, { ...rest, ...props });
    });
  }

  render() {
    const {
      initialValues,
      title,
      errors,
      links,
      mode,
      buttons,
      onCancel,
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
              buttons={buttons}
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
