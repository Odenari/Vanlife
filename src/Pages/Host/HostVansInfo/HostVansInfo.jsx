import {
  tabs,
  wrapper,
  headerText,
  detailsHeader,
} from './HostVansInfo.module.css';
import { Icon } from '../../../Components/UI/Icons/Icon';
import { SmallButton } from '../../../Components/UI/Button/SmallButton/SmallButton';
import { CustomLink } from '../../../Components/UI/Link/CustomLink';
import { capitalize } from '../../../Utils/utilities';

import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const HostVansInfo = () => {
  const [van, setVan] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(resp => resp.json())
      .then(data => setVan(data.vans));
  }, [params.id]);

  return <>{van ? render(van, params) : <h2>Loading...</h2>}</>;
};

function render(van, params) {
  return (
    <section className={wrapper}>
      <CustomLink
        END
        to='..'
        relative='path'
        renderIcon={({ classes }) => <Icon iconClass={classes} />}
      >
        Back to hosted vans
      </CustomLink>
      <div>
        <header className={detailsHeader}>
          <img src={van.imageUrl} alt='van' />
          <div className={headerText}>
            <SmallButton type={van.type}>{capitalize(van.type)}</SmallButton>
            <h2>{van.name}</h2>
            <p className='price'>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
        </header>
      </div>
      <div className={tabs}>
        <CustomLink END to={`/host/vans/${params.id}`}>
          Details
        </CustomLink>
        <CustomLink to='pricing'>Pricing</CustomLink>
        <CustomLink to='photos'>Photos</CustomLink>
      </div>
      <section>
        <Outlet context={{ currentVan: van }} />
      </section>
    </section>
  );
}
