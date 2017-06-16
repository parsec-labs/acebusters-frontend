import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Form, Field, reduxForm } from 'redux-form/immutable';
import { FormattedMessage } from 'react-intl';
import BigNumber from 'bignumber.js';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Label from '../../components/Label';
import H2 from '../../components/H2';
import FormGroup from '../../components/Form/FormGroup';
import { ErrorMessage } from '../../components/FormMessages';

import { isEthereumAddress } from './isEthereumAddress';
import messages from './messages';

const validate = (values) => {
  const errors = {};
  if (!values.get('amount')) {
    errors.amount = 'Required';
  }

  if (!values.get('address')) {
    errors.address = 'Required';
  } else if (!isEthereumAddress(values.get('address'))) {
    errors.address = 'Invalid Ethereum Address.';
  }
  return errors;
};

const warn = () => {
  const warnings = {};
  return warnings;
};

/* eslint-disable react/prop-types */
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <FormGroup>
    <Label htmlFor={input.name}>{label}</Label>
    <Input {...input} type={type} />
    {touched && ((error && <ErrorMessage error={error}></ErrorMessage>) || (warning && <ErrorMessage error={warning}></ErrorMessage>))}
  </FormGroup>
);
/* eslint-enable react/prop-types */

class TransferDialog extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.handleTransfer(
      values.get('address'),
      values.get('amount')
    );
  }

  render() {
    const { error, handleSubmit, submitting, amountUnit, maxAmount } = this.props;

    const limitAmount = (value) => {
      const numValue = Math.max(0, Number(value));

      return maxAmount.gte(new BigNumber(numValue)) ? numValue : maxAmount.toNumber();
    };

    return (
      <div>
        <H2><FormattedMessage {...messages.header} /></H2>
        <Form onSubmit={handleSubmit(this.handleSubmit)}>
          <Field
            name="amount"
            component={renderField}
            type="number"
            label={`Amount (${amountUnit})`}
            normalize={maxAmount && limitAmount}
          />
          <Field
            name="address"
            component={renderField}
            type="text"
            label="Ethereum address"
          />
          {error && <strong>{error}</strong>}
          <div>
            <Button type="submit" disabled={submitting}>Submit</Button>
          </div>
        </Form>
      </div>
    );
  }
}

TransferDialog.propTypes = {
  submitting: PropTypes.bool,
  maxAmount: PropTypes.object, // BigNumber
  amountUnit: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleTransfer: PropTypes.func,
  error: PropTypes.any,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapStateToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'transfer',
    validate,
    warn,
  })(TransferDialog)
);
