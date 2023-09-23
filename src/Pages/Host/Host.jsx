import s from './Host.module.css';
import { CustomLink } from '../../Components/UI/Link/CustomLink';
import { Outlet } from 'react-router-dom';
export const Host = () => {
  return (
    <>
      <nav className={s.hostNav}>
        <CustomLink END to='/host'>
          Dashboard
        </CustomLink>
        <CustomLink to='income'>Income</CustomLink>
        <CustomLink to='vans'>Vans</CustomLink>
        <CustomLink to='reviews'>Reviews</CustomLink>
      </nav>

      <Outlet />
    </>
  );
};
