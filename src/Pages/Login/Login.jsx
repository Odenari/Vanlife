import { useState } from 'react';
import s from './Login.module.css';
import { Link, useSearchParams, useLoaderData } from 'react-router-dom';

export const Login = () => {
  const loaderResponse = useLoaderData();

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData(prev => ({ ...prev, [name]: value }));
  }

  return (
    <div className={s.formContainer}>
      <h2>Sign in into your account</h2>
      {loaderResponse && <h5 style={{ color: 'red' }}>{loaderResponse}</h5>}
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          name='email'
          type='email'
          onChange={handleChange}
          placeholder='Enter email'
        />
        <input
          name='password'
          type='password'
          onChange={handleChange}
          placeholder='Enter password'
        />
        <button>Sign In</button>
      </form>
      <Link to='.'>
        Don’t have an account? <span className={s.create}>Create one now</span>
      </Link>
    </div>
  );
};
