import { Link } from 'react-router-dom';
import s from './Error.module.css';
import { CustomButton } from '../../Components/UI/Button/CustomButton';

export const ErrorNotFound = () => {
  return (
    <section className={`container ${s.errorWrapper}`}>
      <h2>Sorry, the page you were looking for was not found.</h2>
      <Link to='/'>Return to home</Link>
    </section>
  );
};
