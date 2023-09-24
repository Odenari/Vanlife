import s from './VansCatalog.module.css';
import { superbClear, capitalize } from '../../Utils/utilities';
import { CustomLink } from '../../Components/UI/Link/CustomLink';
import { CustomButton } from '../../Components/UI/Button/CustomButton';
import { VanCard } from '../../Components/VanCard/VanCard';
import { useState, useEffect } from 'react';

const feeCategories = [];

const getUniqTypes = data => [...new Set(data.map(o => o.type))];

export const VansCatalog = () => {
  const [vans, setVans] = useState([]);
  const [isActive, setIsActive] = useState('');
  const [filteredVans, setFilteredVans] = useState([]);

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

  const handleSort = (vanList, filter) => {
    setIsActive(filter);
    setFilteredVans(
      vanList.filter(i => {
        if (i.type === filter) return i;
      })
    );
  };

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
                  isActive={isActive}
                  toggleFilter={() => {
                    handleSort(vans, filter);
                  }}
                >
                  {capitalize(filter)}
                </CustomButton>
              );
            })
          ) : (
            <h3>Loading..</h3>
          )}

          <CustomLink handler={() => superbClear(setFilteredVans, setIsActive)}>
            Clear filters
          </CustomLink>
        </div>
        <div className={s.catalogBody}>
          {vans && !filteredVans.length
            ? vans.map(v => <VanCard key={v.id} van={v} />)
            : filteredVans
            ? filteredVans.map(v => <VanCard key={v.id} van={v} />)
            : 'Going to the rabbit hole'}
        </div>
      </div>
    </section>
  );
};
