import React, { Children, Fragment, Component } from "react";
import PropTypes from "prop-types";
import { Section, Heading } from "../../atoms";
import { MessageGroup, ButtonGroup, LinkGroup } from "../../molecules";

const Button = ButtonGroup.Button;

class Shell extends Component {
  state = {};
  static defaultProps = {
    onCancel: () => null,
    mode: "normal"
  };

  static getDerivedStateFromProps(
    { setErrors, mode, setSubmitting, errors, externalErrors },
    { previousErrors, previousMode }
  ) {
    if (externalErrors !== previousErrors) {
      setErrors(externalErrors);
      setSubmitting(false);
    }

    if (mode !== previousMode) {
      setSubmitting(false);
    }

    return {
      previousErrors: externalErrors,
      previousMode: mode
    };
  }

  renderErrors() {
    const { errors } = this.props;
    return <MessageGroup errors={errors.general} />;
  }

  renderHeader() {
    const { title } = this.props;
    return (
      <Section py={6} px={8}>
        <Heading>{title}</Heading>
      </Section>
    );
  }

  renderLinks() {
    const { links } = this.props;
    return <LinkGroup px={8} pt={6} direction="vertical" links={links} />;
  }

  renderActions() {
    const {
      dirty,
      isSubmitting,
      resetForm,
      isValid,
      onCancel,
      cancelTitle,
      submitTitle
    } = this.props;

    return (
      <Section
        py={7}
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
      >
        <ButtonGroup>
          <Button
            disabled={!dirty || isSubmitting}
            onClick={() => {
              onCancel();
              resetForm();
            }}
          >
            {cancelTitle || "Cancel"}
          </Button>
          <Button
            disabled={!isValid || isSubmitting}
            variant="positive"
            type="submit"
          >
            {submitTitle || "Submit"}
          </Button>
        </ButtonGroup>
      </Section>
    );
  }

  render() {
    const { children, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        {this.renderErrors()}
        {this.renderHeader()}
        {children}
        {this.renderLinks()}
        {this.renderActions()}
      </form>
    );
  }
}

export default Shell;
