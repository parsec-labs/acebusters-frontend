/**
 * Created by helge on 24.08.16.
 */
import React from 'react';

import FlagAmount from './FlagAmount';
import FlagButton from './FlagButton';
import ControlBetRaise from './ControlBetRaise';
import ControlCheckCall from './ControlCheckCall';
import ControlFold from './ControlFold';
import Slider from './Slider';

import {
  ActionBarWrapper,
  ControlPanel,
  ControlWrapper,
  FlagContainer,
} from './styles';

const ActionBar = (props) => {
  const {
    active,
    sliderOpen,
    visible,
  } = props;
  if (visible) {
    return (
      <ActionBarWrapper active={active} name="action-bar-wrapper">

        <FlagContainer active={active} name="flag-container">
          <FlagAmount {...props} />
          <FlagButton type="quarter" {...props} />
          <FlagButton type="half" {...props} />
          <FlagButton type="pot" {...props} />
        </FlagContainer>

        <ControlPanel name="control-panel-visible">
          <ControlWrapper>
            <ControlFold {...props} />
            <ControlCheckCall {...props} />
            <ControlBetRaise {...props} />
            {sliderOpen ? <Slider {...props} /> : null }
          </ControlWrapper>
        </ControlPanel>

      </ActionBarWrapper>
    );
  }
  return null;
};

ActionBar.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  active: React.PropTypes.bool.isRequired,
  sliderOpen: React.PropTypes.bool.isRequired,
};

export default ActionBar;
