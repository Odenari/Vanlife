import { link, activeLink } from './CustomLink.module.css';
import { NavLink } from 'react-router-dom';

const activeClass = active => {
  if (active) return 'active';
};

export const CustomLink = ({
  handler,
  renderIcon,
  END,
  to,
  relative,
  ...props
}) => {
  const classes = ['left'];
  return (
    <NavLink
      end={END}
      onClick={handler}
      to={to ? to : null}
      relative={relative}
      className={route => (route.isActive && activeLink) || link}
    >
      {renderIcon && renderIcon({ classes })}
      {props.children}
    </NavLink>
  );
};
