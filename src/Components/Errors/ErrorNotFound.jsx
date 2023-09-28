import s from './Error.module.css';
import { useState } from 'react';
import { Link, useRouteError } from 'react-router-dom';

export const ErrorNotFound = () => {
  return (
    <section className={`container ${s.errorWrapper}`}>
      <h2>Sorry, the page you were looking for was not found.</h2>
      <Link to='/'>Return to home</Link>
    </section>
  );
};

export function Error() {
  const error = useRouteError();
  const [rage, setRage] = useState('...');

  return (
    <section
      style={{
        margin: '2rem auto',
        width: '70%',
      }}
    >
      <h3>Suddenly, a convolute error happens.</h3>
      <div
        style={{
          marginTop: '1.725rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '0.82rem',
        }}
      >
        <p>
          <b>Status</b>: {error.status || 'Status unknown..'}
        </p>
        <p>
          <strong>Type</strong>: {error.statusText || 'Status unknown..'}
        </p>
        <p>
          {console.log(error.message)}
          <strong>Explanation</strong>: {error.message}
        </p>
        <p>Please try to refresh the page</p>
        <p>Or reach out to help</p>
      </div>
      <button
        style={{
          marginBlock: '2rem',
          padding: '1em 2em',
          background: 'darkblue',
          color: 'white',
        }}
        disabled={rage === 'And relax, just let it go...'}
        onClick={() =>
          setRage(prev => {
            if (prev.length > 70) return 'Take a deep breath : ';
            if (prev.includes('Take a deep breath : ' + 'A'.repeat(40)))
              return 'And relax, just let it go...';
            return (prev += 'AAA');
          })
        }
      >
        SCREAM FOR HELP or RAGE RELIEF
      </button>
      <div width={300} className='rageMeter'>
        {rage}
      </div>
      <Link className={s.choppa} to={'/'}>
        Get to the choppa!!
      </Link>
    </section>
  );
}
