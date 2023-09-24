import s from './VanDetails.module.css';

import { Icon } from '../../Components/UI/Icons/Icon';
import { CustomLink } from '../../Components/UI/Link/CustomLink';
import { CustomButton as Button } from '../../Components/UI/Button/CustomButton';
import { useOutletContext } from 'react-router-dom';
import { capitalize } from '../../Utils/utilities';

export const VanDetails = () => {
  const van = useOutletContext();

  return (
    <>
      {van ? (
        <div className={s.wrapper}>
          <CustomLink
            to='..' // ".." point to parent path like in cd ../ command this made our path a relative to parent no matter name he have
            relative='path'
            renderIcon={({ classes }) => <Icon iconClass={classes} />}
          >
            Back to all vans
          </CustomLink>
          <img src={van.imageUrl} alt='Van' />
          <Button type={van.type}>{capitalize(van.type)}</Button>
          <div>
            <h2>{van.name}</h2>
            <p className={s.price}>
              ${van.price}
              <span>/day</span>
            </p>
            <p className={s.descr}>{van.description}</p>
          </div>
          <Button type='home' to='#'>
            Rent this van
          </Button>
        </div>
      ) : (
        <h2>Loading..</h2>
      )}
    </>
  );
};
