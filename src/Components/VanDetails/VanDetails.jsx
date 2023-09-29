import s from './VanDetails.module.css';

import { Icon } from '../../Components/UI/Icons/Icon';
import { CustomLink } from '../../Components/UI/Link/CustomLink';
import { CustomButton as Button } from '../../Components/UI/Button/CustomButton';
import { capitalize, generatePath } from '../../Utils/utilities';
import { useLocation, useLoaderData } from 'react-router-dom';

export const VanDetails = () => {
  //getting data from loader
  const van = useLoaderData();
  //getting searchParams from location obj to proper back navigation
  const location = useLocation();
  const searchParameter = location.state?.searchParam || '';

  return (
    <>
      <div className={s.wrapper}>
        <CustomLink
          relative='path'
          to={generatePath(searchParameter)}
          renderIcon={({ classes }) => <Icon iconClass={classes} />}
        >
          Back to {searchParameter || 'all'} vans
        </CustomLink>
        <img src={van.imageUrl} alt='Van' />
        <Button
          relative='path'
          type={van.type}
          to={generatePath(searchParameter)}
        >
          {capitalize(van.type)}
        </Button>
        <div>
          <h2>{van.name}</h2>
          <p className={s.price}>
            ${van.price}
            <span>/day</span>
          </p>
          <p className={s.descr}>{van.description}</p>
        </div>
        <Button type='home' to={'.'}>
          Rent this van (in progress)
        </Button>
      </div>
    </>
  );
};
