import { link, activeLink } from './CustomLink.module.css';
import { NavLink } from 'react-router-dom';

const activeClass = active => {
  if (active) return 'active';
};

export const CustomLink = ({ renderIcon, END, ...props }) => {
  const classes = ['left'];

  return (
    <NavLink
      end={END}
      to={props.to}
      className={route => (route.isActive && activeLink) || link}
    >
      {renderIcon && renderIcon({ classes })}
      {props.children}
    </NavLink>
  );
};
