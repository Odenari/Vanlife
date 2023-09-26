import s from './Host.module.css';
import { CustomLink } from '../../Components/UI/Link/CustomLink';
import { Outlet } from 'react-router-dom';

// "." Symbol represent a relative path which specified in parent Route
// That means if someone somehow would decide to change PATH in
// our dashboard will be relative to this new path
// So goal to avoid absolute path everywhere where it possible

export const Host = () => {
  return (
    <>
      <nav className={s.hostNav}>
        <CustomLink END to='.'>
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
