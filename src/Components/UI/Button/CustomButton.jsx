import s from './CustomButton.module.css';

import { Link } from 'react-router-dom';

export const CustomButton = ({ buttonType, to, children }) => {
  const styles = {
    home: s.primaryLong,
    about: s.secondaryBlack,
    default: s.baseStyling,
  };

  return (
    <Link className={`${styles[buttonType]} ${styles.default}`} to={to}>
      {children}
    </Link>
  );
};
