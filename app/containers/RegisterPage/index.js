import React from 'react';
import { connect } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { Form, Field, reduxForm, propTypes } from 'redux-form/immutable';
// import { browserHistory } from 'react-router';

// components
import Container from '../../components/Container';
import FormGroup from '../../components/Form/FormGroup';
import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';
import H1 from '../../components/H1';
import { ErrorMessage, WarningMessage } from '../../components/FormMessages';

import { register } from './actions';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const refRegex = /^[0-9a-f]{8}$/i;

const validate = (values) => {
  const errors = {};
  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!emailRegex.test(values.get('email'))) {
    errors.email = 'Invalid email address.';
  }
  if (!values.get('captchaResponse')) {
    errors.captchaResponse = 'Required';
  }

  const referral = values.get('referral') || '';
  if (!refRegex.test(referral)) {
    if (!values.has('defaultRef') && referral.length === 0) {
      errors.referral = 'Referral code is required';
    } else if (referral.length > 0) {
      errors.referral = 'Referral code must have 8 letters';
    }
  }

  return errors;
};

const warn = (values) => {
  const warnings = {};
  values.get('email');
  return warnings;
};

/* eslint-disable react/prop-types */
const Captcha = (props) => (
  <div style={{ marginBottom: '15px' }}>
    <ReCAPTCHA
      sitekey={'6LcE0RQUAAAAAEf6UWFsHEPedPBmRPAQiaSiWynN'}
      onChange={props.input.onChange}
    />
  </div>
);

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <FormGroup>
    <Label htmlFor={input.name}>{label}</Label>
    <Input {...input} placeholder={label} type={type} />
    {touched && ((error && <ErrorMessage error={error} />) || (warning && <WarningMessage warning={warning} />))}
  </FormGroup>
);
/* eslint-enable react/prop-types */

export class RegisterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.register({
      email: values.get('email'),
      captchaResponse: values.get('captchaResponse'),
      origin: window.location.origin,
      referral: values.get('referral') || values.get('defaultRef'),
    });
  }

  render() {
    const { error, invalid, submitting, handleSubmit, asyncValidating } = this.props;

    return (
      <Container>
        <div>
          <H1>Register a new account!</H1>
          <Form
            onSubmit={handleSubmit(this.handleSubmit)}
          >
            <Field name="email" type="text" component={renderField} label="e-mail" />
            <Field
              name="referral"
              type="text"
              component={renderField}
              label="referral code"
            />
            <Field name="captchaResponse" component={Captcha} />
            {error && <ErrorMessage error={error} />}
            <Button type="submit" disabled={submitting || invalid || asyncValidating} size="large">
              { (!submitting) ? 'Register' : 'Please wait ...' }
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

RegisterPage.propTypes = {
  ...propTypes,
  input: React.PropTypes.any,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    register: (payload) => dispatch(register(payload)),
  };
}

// Which props do we want to inject, given the global state?
const mapStateToProps = () => ({});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'register',
    validate,
    warn,
  })(RegisterPage)
);
