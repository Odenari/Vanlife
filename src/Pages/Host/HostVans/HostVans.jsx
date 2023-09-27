import { HostVansItem } from './HostVansItem/HostVansItem';
import { useLoaderData } from 'react-router-dom';

export const HostVans = () => {
  const hostVans = useLoaderData();

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
