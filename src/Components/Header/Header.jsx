import s from './Header.module.css';

import logo from '/src/Assets/Logo/logog.png';
import { CustomLink } from '../UI/Link/CustomLink';

export const Header = () => {
  return (
    <header>
      <nav className={s.navContainer}>
        <ul className={s.listOfLinks}>
          <li>
            <CustomLink to='/'>
              <img className={s.logoImg} src={logo} alt='#Vanlife logotype' />
            </CustomLink>
          </li>
          <li className={s.coupledLinks}>
            <CustomLink to='/host'>Host</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
            <CustomLink to='/vans'>Vans</CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
