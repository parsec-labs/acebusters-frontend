import React from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';
import Center from './Center';
import { Link } from './styles';

const notLoggedIn = {
  txId: 'AUTH_NOT_LOGGED_IN',
  notifyType: 'AUTH_NOT_LOGGED_IN',
  category: 'Visitor Mode',
  details: <span>Please <Link to="/login">login</Link> or <Link to="/register">signup</Link> to join a game</span>,
  removing: false,
  dismissable: false,
  date: new Date(),
  type: 'info',
};

const Tester = (props) => {
  const { pathname, notifications, loggedIn } = props;
  const isGenerate = pathname.indexOf('generate') === 1;
  if (loggedIn || isGenerate) {
    return (
      <div>
        {notifications.length !== 0 &&
          notifications.map(
            (item, i) => <Notification key={i} {...item} {...props} />,
          )
        }
      </div>
    );
  }
  return <Center {...notLoggedIn} {...props} />;
};
Tester.propTypes = {
  pathname: PropTypes.string,
  loggedIn: PropTypes.bool,
  notifications: PropTypes.array,
};

export default Tester;
