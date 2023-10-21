import s from './Header.module.css';
import userIcon from '../../Assets/Icons/Icon.svg';
import logo from '/src/Assets/Logo/logog.png';
import { CustomLink } from '../UI/Link/CustomLink';

export const Header = () => {
  const fakeLogOut = () => {
    localStorage.removeItem('isLogged');
  };

  return (
    <header>
      <nav className={s.navContainer}>
        <ul className={s.listOfLinks}>
          <li>
            <CustomLink to='/'>
              <img className={s.logoImg} src={logo} alt='logotype' />
            </CustomLink>
          </li>
          <li className={s.coupledLinks}>
            <CustomLink to='host'>Host</CustomLink>
            <CustomLink to='about'>About</CustomLink>
            <CustomLink to='vans'>Vans</CustomLink>
            <CustomLink to='login'>
              <img src={userIcon} />
            </CustomLink>
            <button onClick={fakeLogOut}>Log out</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
