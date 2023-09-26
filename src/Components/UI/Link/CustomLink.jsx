import { link, activeLink } from './CustomLink.module.css';
import { NavLink } from 'react-router-dom';

export const CustomLink = ({
  to,
  END,
  handler,
  relative,
  renderIcon,
  ...props
}) => {
  const classes = ['left'];
  return (
    <NavLink
      end={END}
      onClick={handler}
      to={to ? to : null}
      relative={relative}
      className={({ isActive }) => (isActive && activeLink) || link}
    >
      {renderIcon && renderIcon({ classes })}
      {props.children}
    </NavLink>
  );
};
