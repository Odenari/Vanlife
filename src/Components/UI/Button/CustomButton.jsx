import s from './CustomButton.module.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const styles = {
  home: s.primaryLong,
  about: s.secondaryBlack,
  filter: s.filterBtn,
  default: s.baseStyling,
  simple: s.simpleBg,
  rugged: s.ruggedBg,
  luxury: s.luxuryBg,
};

export const CustomButton = ({ type, to, children }) => {
  return (
    <Link className={`${styles[type]} ${styles.default}`} to={to}>
      {children}
    </Link>
  );
};
