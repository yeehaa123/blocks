import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Form from "../Form";
import { PasswordInput } from "../../molecules";

class SignUpForm extends Component {
  static propTypes = {
    /** callback that triggers when the form is submitted */
    onSubmit: PropTypes.func.isRequired,
    /** callback that triggers when the form is cancelled */
    onCancel: PropTypes.func,
    /** optional initial username */
    userName: PropTypes.string,
    /** object with external errors */
    errors: PropTypes.shape({
      userName: PropTypes.string,
      email: PropTypes.string,
      confirmationCode: PropTypes.string,
      password: PropTypes.string
    }),
    /** flag that indicates confirmMode */
    confirmMode: PropTypes.bool,
    /** object that defines the links to other forms */
    links: PropTypes.arrayOf(
      PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
      })
    )
  };

  static defaultProps = {
    confirmMode: false,
    userName: ""
  };

  render() {
    const {
      confirmMode,
      userName,
      onSubmit,
      links,
      errors,
      onCancel
    } = this.props;

    const mode = confirmMode ? "confirm" : "normal";

    return (
      <Form
        initialValues={{
          userName,
          email: "",
          password: "",
          confirmationCode: ""
        }}
        links={links}
        mode={mode}
        errors={errors}
        title="Sign Up"
        onSubmit={onSubmit}
        onCancel={onCancel}
        setSubmitting={!confirmMode}
      >
        <Form.Field title="User Name" name="userName" placeholder="User Name" />
        <Form.Field
          title="Email"
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <Form.Field
          title="Password"
          FieldComponent={PasswordInput}
          name="password"
          placeholder="Password"
        />

        {confirmMode && (
          <Form.Field
            title="Confirmation Code"
            name="confirmationCode"
            placeholder="Confirmation Code"
          />
        )}
      </Form>
    );
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  userName: PropTypes.string,
  errors: PropTypes.shape({
    userName: PropTypes.string,
    email: PropTypes.string,
    confirmationCode: PropTypes.string,
    password: PropTypes.string
  })
};

export default SignUpForm;
