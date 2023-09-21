import {
  baseStyling,
  primaryLong,
  secondaryBlack,
} from './CustomButton.module.css';

import { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';

function reducer(state, action) {
  switch (action.type) {
    case 'primaryLong':
      return { ...state, styles: primaryLong };
    case 'secondaryBlack':
      return { ...state, styles: secondaryBlack };
  }
}

export const CustomButton = ({ buttonType, to, children }) => {
  const [state, dispatch] = useReducer(reducer, {
    styles: buttonType,
    default: baseStyling,
  });

  useEffect(() => {
    dispatch({
      type: buttonType,
    });
  }, [buttonType]);

  return (
    <Link className={`${state.styles} ${state.default}`} to={to}>
      {children}
    </Link>
  );
};
