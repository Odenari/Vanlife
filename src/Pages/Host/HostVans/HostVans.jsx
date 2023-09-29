import { HostVansItem } from './HostVansItem/HostVansItem';
import { Suspense } from 'react';
import { useLoaderData, Await, Link } from 'react-router-dom';

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
        <div>
          <h2>Your listed vans</h2>
          <Link to='../vans'>View All</Link>
        </div>
        <Suspense fallback={<h2>Loading vans...</h2>}>
          <Await resolve={data.vans}>
            {hostVans => (
              <ul>
                {hostVans.map(van => {
                  console.log(van);
                  return <HostVansItem van={van} key={van.id} />;
                })}
              </ul>
            )}
          </Await>
        </Suspense>
      </section>
    </>
  );
};
