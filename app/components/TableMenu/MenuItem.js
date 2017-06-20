import React from 'react';
import Link from '../Link';

import {
 ItemWrapper,
 ItemIcon,
 ItemTitle,
} from './styles';

const MenuItem = ({ item, ...props }) => {
  const children = [
    <ItemIcon className={item.icon} aria-hidden key="0" />,
    <ItemTitle key="1">
      {item.title}
    </ItemTitle>,
  ];

  const handleClick = () => {
    if (props.open) {
      props.toggleMenuOpen();
    }
    if (item.onClick) {
      item.onClick();
    }
  };

  if (item.onClick) {
    // if the menu is open, close it
    return (
      <ItemWrapper
        name={item.name}
        disabled={item.disabled}
        onClick={handleClick}
      >
        {children}
      </ItemWrapper>
    );
  }

  // ToDo: update styled-component and use extendWith method for change tagName to a
  return (
    <Link
      to={item.to}
      onClick={handleClick}
      component={ItemWrapper}
    >
      {children}
    </Link>
  );
};
MenuItem.propTypes = {
  item: React.PropTypes.object,
  open: React.PropTypes.bool,
  toggleMenuOpen: React.PropTypes.func,
};

export default MenuItem;
