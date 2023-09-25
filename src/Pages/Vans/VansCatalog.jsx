import s from './VansCatalog.module.css';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { VanCard } from '../../Components/VanCard/VanCard';
import { superbClear, capitalize, filterByType } from '../../Utils/utilities';
import { CustomLink } from '../../Components/UI/Link/CustomLink';
import { CustomButton } from '../../Components/UI/Button/CustomButton';

const feeCategories = [];

const getUniqTypes = data => [...new Set(data.map(o => o.type))];

export const VansCatalog = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/vans')
      .then(res => res.json())
      .then(data => {
        setVans(data.vans);
        if (!feeCategories.length) {
          feeCategories.push(...getUniqTypes(data.vans));
        }
      });
  }, []);

  const [searchParams] = useSearchParams();
  const searchType = searchParams.get('type');
  const filteredVans = filterByType(vans, searchType);

  return (
    <section className='container'>
      <div className={s.catalogHeader}>
        <h2>Explore our van options</h2>
        <div className={s.filtersWrapper}>
          {feeCategories.length ? (
            feeCategories.map((filter, index) => {
              return (
                <CustomButton
                  key={index}
                  type={filter}
                  isActive={searchType}
                  searchParams={searchParams}
                >
                  {capitalize(filter)}
                </CustomButton>
              );
            })
          ) : (
            <h3>Loading..</h3>
          )}

          {searchType && <CustomLink to='.'>Clear filters</CustomLink>}
        </div>
        <div className={s.catalogBody}>
          {vans && !filteredVans.length
            ? vans.map(v => <VanCard key={v.id} van={v} />)
            : filteredVans.length
            ? filteredVans.map(v => <VanCard key={v.id} van={v} />)
            : 'Going to the rabbit hole'}
        </div>
      </div>
    </section>
  );
};
