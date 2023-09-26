import s from './CustomButton.module.css';
import { setActiveStyles } from '../../../Utils/utilities.js';
import { Link } from 'react-router-dom';

const styles = {
  home: s.primaryLong,
  about: s.secondaryBlack,
  filter: s.filterBtn,
  default: s.baseStyling,
  simple: s.simpleBg,
  rugged: s.ruggedBg,
  luxury: s.luxuryBg,
};

export const CustomButton = props => {
  const { to, type, isActive, children, state, relative } = props;

  if (!children) {
    console.error('Arguments is missing...');
  }

  const activeStyles = setActiveStyles(isActive, type);

  return (
    <Link
      state={state}
      style={activeStyles}
      relative={relative}
      to={to || `?type=${type}`}
      className={`${styles[type]} ${styles.default}`}
    >
      {children}
    </Link>
  );
};
