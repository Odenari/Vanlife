import { link } from './CustomLink.module.css';
import { Link } from 'react-router-dom';

export const CustomLink = props => {
  return (
    <Link className={link} to={props.to}>
      {props.children}
    </Link>
  );
};
