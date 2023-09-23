import s from './SmallButton.module.css';
import { Link } from 'react-router-dom';

export const SmallButton = ({ type, to, children }) => {
  const styles = {
    default: s.baseStyling,
    simple: s.simpleBg,
    rugged: s.ruggedBg,
    luxury: s.luxuryBg,
  };
  return (
    <Link className={`${styles[type]} ${styles.default}`} to={to}>
      {children}
    </Link>
  );
};
