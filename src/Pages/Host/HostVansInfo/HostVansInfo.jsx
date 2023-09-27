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

import { Outlet, useLoaderData } from 'react-router-dom';

export const HostVansInfo = () => {
  const van = useLoaderData();

  return <>{van && render(van)}</>;
};

function render(van) {
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
        <CustomLink END to={'.'}>
          Details
        </CustomLink>
        <CustomLink to='pricing'>Pricing</CustomLink>
        <CustomLink to='photos'>Photos</CustomLink>
      </div>
      <Outlet context={{ currentVan: van }} />
    </section>
  );
}
