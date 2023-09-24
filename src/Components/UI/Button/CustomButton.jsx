import s from './CustomButton.module.css';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const styles = {
  home: s.primaryLong,
  about: s.secondaryBlack,
  filter: s.filterBtn,
  default: s.baseStyling,
  simple: s.simpleBg,
  rugged: s.ruggedBg,
  luxury: s.luxuryBg,
};

const backgrounds = {
  default: '#ffead0',
  simple: '#e17654',
  rugged: '#161616',
  luxury: '#115e59',
};

const setActiveStyles = (flag, type) => {
  if (!flag && !type) {
    throw new Error(`Argument is missing in setActiveStyles function `);
  }

  if (flag === type) {
    return {
      color: '#FFF',
      background: backgrounds[flag],
    };
  }
};

export const CustomButton = props => {
  const { to, type, isActive, toggleFilter, children } = props;

  const activeStyles = setActiveStyles(isActive, type);

  return (
    <Link
      to={to ? to : null}
      onClick={() => {
        toggleFilter();
      }}
      style={activeStyles}
      className={`${styles[type]} ${styles.default}`}
    >
      {children}
    </Link>
  );
};
