import s from './HostVans.module.css';
import { useState, useEffect } from 'react';
import { HostVansItem } from '../HostVansItem/HostVansItem';
export const HostVans = () => {
  const [hostVans, setHostVans] = useState(null);

  useEffect(() => {
    fetch('/api/vans')
      .then(resp => resp.json())
      .then(data => {
        setHostVans(data.vans);
      });
  }, []);

  return (
    <>
      <section className='container'>
        <h2>Your listed vans</h2>
        <ul>
          {hostVans ? (
            hostVans.map(van => <HostVansItem van={van} key={van.id} />)
          ) : (
            <h2>Loading..</h2>
          )}
        </ul>
      </section>
    </>
  );
};
