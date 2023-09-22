import s from './VansCatalog.module.css';
import { capitalize } from '../../Utils/utilities';
import { CustomLink } from '../../Components/UI/Link/CustomLink';
import { CustomButton } from '../../Components/UI/Button/CustomButton';
import { VanCard } from '../../Components/VanCard/VanCard';
import { useState, useEffect, Suspense } from 'react';

const FILTER_TYPES = [
  { id: 0, vanSegment: 'simple' },
  { id: 1, vanSegment: 'luxury' },
  { id: 2, vanSegment: 'rugged' },
];
const TYPES = {};
const createUniqTypes = data => [...new Set(data.map(o => o.type))];

export const VansCatalog = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/vans')
      .then(res => res.json())
      .then(data => {
        setVans(data.vans);
        TYPES.initialTypes = createUniqTypes(data.vans);
      });
  }, []);

  return (
    <section className={s.container}>
      <div className={s.catalogHeader}>
        <h2>Explore our van options</h2>
        <div className={s.filtersWrapper}>
          {TYPES.initialTypes &&
            TYPES.initialTypes.map((filter, index) => {
              return (
                <CustomButton key={index} type={filter}>
                  {capitalize(filter)}
                </CustomButton>
              );
            })}

          <CustomLink>Clear filters</CustomLink>
        </div>
        <div className={s.catalogBody}>
          {vans && vans.map(v => <VanCard key={v.id} van={v} />)}
        </div>
      </div>
    </section>
  );
};
