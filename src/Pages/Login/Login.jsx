import s from './Login.module.css';
import {
  Link,
  Form,
  useLoaderData,
  useActionData,
  useNavigation,
} from 'react-router-dom';

export const Login = () => {
  // testing version
  const nav = useNavigation();
  const error = useActionData();
  const loaderResponse = useLoaderData();
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
          <h6>{error}</h6>
        </div>
      )}
      <Form replace method='post' className={s.form}>
        <input name='email' type='email' placeholder='Enter email' />
        <input name='password' type='password' placeholder='Enter password' />
        <button disabled={nav.state === 'submitting' || null}>
          {nav.state === 'submitting' ? 'Logging in...' : 'Log in'}
        </button>
      </Form>
      <Link to='.'>
        Don’t have an account? <span className={s.create}>Create one now</span>
      </Link>
    </div>
  );
};
