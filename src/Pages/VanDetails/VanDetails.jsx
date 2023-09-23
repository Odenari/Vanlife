import s from './VanDetails.module.css';

import { Icon } from '../../Components/UI/Icons/Icon';
import { CustomLink } from '../../Components/UI/Link/CustomLink';
import { CustomButton as Button } from '../../Components/UI/Button/CustomButton';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { capitalize } from '../../Utils/utilities';

export const VanDetails = () => {
  const params = useParams();
  const [van, setVan] = useState(null);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(resp => resp.json())
      .then(data => setVan(data.vans));
  }, [params.id]);
  return (
    <>
      {van ? (
        <div className={s.wrapper}>
          <CustomLink
            to='/vans/'
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
