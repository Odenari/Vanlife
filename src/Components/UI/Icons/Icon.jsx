import s from './Icon.modules.css';
import leftArrow from '../../../Assets/Icons/leftArrow.svg';

const icons = {
  leftArrow: leftArrow,
};

export const Icon = ({ iconClass }) => {
  return (
    <img
      className={iconClass[0] === 'left' ? iconClass[0] : null}
      src={icons.leftArrow}
    />
  );
  // return <img className={computedClass} src={icons.leftArrow} />;
};
