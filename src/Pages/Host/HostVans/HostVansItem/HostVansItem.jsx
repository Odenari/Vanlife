import s from './HostVansItem.module.css';
import { Link } from 'react-router-dom';

export const HostVansItem = ({ van }) => {
  return (
    <>
      <li>
        <Link className={s.listItem} to={`${van.id}`}>
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
