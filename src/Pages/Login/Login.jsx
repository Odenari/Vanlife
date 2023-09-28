import { useState, Form } from 'react';
import s from './Login.module.css';
import { Link, useLoaderData } from 'react-router-dom';
import { loginUser, submitLogin } from '../../Utils/utilities';

export const Login = () => {
  // testing version
  const [error, setError] = useState(null);
  const [formStatus, setFormStatus] = useState('idle');

  //essential hooks
  const loaderResponse = useLoaderData();
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    setFormStatus('submitting');
    setError(null);
    loginUser(loginFormData)
      .then(data => {
        console.log(data);
        // users.loggedInUsers(data);
        // console.log(users);
      })
      .catch(e => setError(e))
      .finally(() => setFormStatus('idle'));
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData(prev => ({ ...prev, [name]: value }));
  }

  return (
    <div className={s.formContainer}>
      <h2>Sign in into your account</h2>
      {loaderResponse && <h5 style={{ color: 'red' }}>{loaderResponse}</h5>}
      {error && (
        <div
          style={{
            color: 'red',
          }}
        >
          <h6>{error.message}</h6>
          <p>
            {error.statusText}, code: {error.status}
          </p>
        </div>
      )}
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
        <button disabled={formStatus === 'submitting' || null}>
          {formStatus === 'submitting' ? 'Logging in...' : 'Log in'}
        </button>
      </form>
      <Link to='.'>
        Don’t have an account? <span className={s.create}>Create one now</span>
      </Link>
    </div>
  );
};
