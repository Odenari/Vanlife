import s from './VansCatalog.module.css';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { VanCard } from '../../Components/VanCard/VanCard';
import { capitalize, requestVans, getUniqTypes } from '../../Utils/utilities';
import { CustomLink } from '../../Components/UI/Link/CustomLink';
import { CustomButton } from '../../Components/UI/Button/CustomButton';

//
import { useLoaderData, useSearchParams } from 'react-router-dom';

const feeCategories = ['simple', 'rugged', 'luxury'];

export const VansCatalog = () => {
  const vans = useLoaderData();
  const [searchParams] = useSearchParams();
  const searchType = searchParams.get('type');

  const displayedVans = searchType
    ? vans.filter(van => van.type === searchType)
    : vans;

  return (
    <section className='container'>
      <div className={s.catalogHeader}>
        <h2>Explore our van options</h2>

        <div className={s.filtersWrapper}>
          {feeCategories.map((filter, index) => (
            <CustomButton key={index} type={filter} isActive={searchType}>
              {capitalize(filter)}
            </CustomButton>
          ))}
          {searchType && <CustomLink to='.'>Clear filters</CustomLink>}
        </div>

        <div className={s.catalogBody}>
          {displayedVans &&
            displayedVans.map(v => (
              <VanCard van={v} key={v.id} state={{ searchParam: searchType }} />
            ))}
        </div>
      </div>
    </section>
  );
};
