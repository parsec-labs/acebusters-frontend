import React from 'react';
import PropTypes from 'prop-types';

import { FlagBet } from './styles';
import { toNtz, NTZ_DECIMALS } from '../../utils/amountFormatter';

import {
  BET,
} from '../../containers/ActionBar/actions';

/* eslint-disable jsx-a11y/no-autofocus */
class FlagAmountBet extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.sliderOpen !== this.props.sliderOpen && nextProps.sliderOpen && this.input) {
      setTimeout(() => {
        this.input.focus();
      }, 1000);
    }
  }

  render() {
    const {
      amount,
      sliderOpen,
      updateAmount,
      handleClickButton,
      setActionBarButtonActive,
      mode,
      active,
      disabled,
    } = this.props;
    return (
      <FlagBet sliderOpen={sliderOpen}>
        <input
          ref={(input) => {
            this.input = input;
          }}
          type="number"
          value={toNtz(amount)}
          onChange={(e) => updateAmount(NTZ_DECIMALS.mul(parseInt(e.target.value, 10)))}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              if (!active || disabled || mode === BET) return;
              setActionBarButtonActive(BET);
              handleClickButton(BET);
            }
          }}
        />
      </FlagBet>
    );
  }
}
FlagAmountBet.propTypes = {
  amount: PropTypes.number,
  updateAmount: PropTypes.func,
  sliderOpen: PropTypes.bool,
  handleClickButton: PropTypes.func,
  setActionBarButtonActive: PropTypes.func,
  mode: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default FlagAmountBet;
