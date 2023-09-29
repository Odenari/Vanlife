import s from './HostVansItem.module.css';
import { Link, useLocation } from 'react-router-dom';

export const HostVansItem = ({ van }) => {
  const location = useLocation();
  const path = location.pathname.includes('/vans')
    ? van.id
    : `vans/${van.id}?redirectTo=${location.pathname}`;

  return (
    <>
      <li>
        <Link className={s.listItem} to={path}>
          <img src={van.imageUrl} alt='van' />
          <div>
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
        </Link>
      </li>
    </>
  );
};
