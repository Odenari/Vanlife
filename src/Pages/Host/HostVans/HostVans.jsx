import { HostVansItem } from './HostVansItem/HostVansItem';
import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';

export const HostVans = () => {
  const data = useLoaderData();

  return (
    <>
      <section
        style={{
          marginTop: 'calc(var(--base-m) * 2)',
        }}
        className='container'
      >
        <h2>Your listed vans</h2>
        <Suspense fallback={<h2>Loading vans...</h2>}>
          <Await resolve={data.vans}>
            {hostVans => (
              <ul>
                {hostVans ? (
                  hostVans.map(van => <HostVansItem van={van} key={van.id} />)
                ) : (
                  <h2>Loading..</h2>
                )}
              </ul>
            )}
          </Await>
        </Suspense>
      </section>
    </>
  );
};
