import s from './VanCard.module.css';
import { CustomButton } from '../UI/Button/CustomButton';
import { capitalize } from '../../Utils/utilities';
import { Link } from 'react-router-dom';

export const VanCard = ({ van }) => {
  const { imageUrl, name, price, type: vanSegment } = van;
  const btnName = capitalize(vanSegment);

  return (
    <div className={s.vanWrapper}>
      <Link to={`/vans/${van.id}`}>
        <img src={imageUrl} alt={`Van model  ${name}`} />
      </Link>
      <div className={s.vanInfo}>
        <h3>{name}</h3>
        <p className={s.price}>
          <span>${price}</span>
          <span>/day</span>
        </p>
      </div>
      <CustomButton to={`/vans/${van.id}`} type={vanSegment}>
        {btnName}
      </CustomButton>
    </div>
  );
};
