import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { Section } from "../../../atoms";
import { InputField } from "../../../molecules";

class FormField extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
  };

  render() {
    const { name, variant, title, placeholder } = this.props;
    return (
      <Section>
        <Field
          name={name}
          render={({ field, form }) => {
            const { errors, touched } = form;
            return (
              <InputField
                {...field}
                variant={variant}
                title={title}
                errors={touched[name] && errors[name] && [errors[name]]}
                placeholder={placeholder}
              />
            );
          }}
        />
      </Section>
    );
  }
}

export default FormField;
