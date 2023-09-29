import s from './VansCatalog.module.css';
import { VanCard } from '../../Components/VanCard/VanCard';
import { capitalize } from '../../Utils/utilities';
import { CustomLink } from '../../Components/UI/Link/CustomLink';
import { CustomButton } from '../../Components/UI/Button/CustomButton';
import { Suspense } from 'react';
import {
  useLoaderData,
  useSearchParams,
  Await,
  useRouteError,
} from 'react-router-dom';

const feeCategories = ['simple', 'rugged', 'luxury'];

export const VansCatalog = () => {
  const data = useLoaderData();
  const [searchParams] = useSearchParams();
  const searchType = searchParams.get('type');
  return (
    <section className='container'>
      <div className={s.catalogHeader}>
        <h2>Explore our van options</h2>
        <Suspense
          fallback={
            <h2
              style={{
                color: 'lightslategray',
              }}
            >
              Searching for available vans..
            </h2>
          }
        >
          <Await resolve={data.vans}>
            {vans => waitAndRenderVans(vans, searchType)}
          </Await>
        </Suspense>
      </div>
    </section>
  );
};

function waitAndRenderVans(vans, filter) {
  const displayedVans = filter ? vans.filter(van => van.type === filter) : vans;
  return (
    <>
      <div className={s.filtersWrapper}>
        {feeCategories.map((filter, index) => (
          <CustomButton key={index} type={filter} isActive={filter}>
            {capitalize(filter)}
          </CustomButton>
        ))}
        {filter && <CustomLink to='.'>Clear filters</CustomLink>}
      </div>

      <div className={s.catalogBody}>
        {displayedVans.map(v => (
          <VanCard van={v} key={v.id} state={{ searchParam: filter }} />
        ))}
      </div>
    </>
  );
}
