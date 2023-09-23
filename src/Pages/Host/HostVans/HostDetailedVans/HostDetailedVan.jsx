import { fieldName, textContent } from './HostDetailedVan.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const HostDetailedVans = () => {
  const [van, setVan] = useState(null);
  const param = useParams();

  useEffect(() => {
    fetch(`/api/vans/${param.id}`)
      .then(resp => resp.json())
      .then(data => setVan(data.vans));
  }, [param.id]);

  return <>{van && renderDetails(van)}</>;
};

function renderDetails(van) {
  return (
    <section>
      <ul className={textContent}>
        <li>
          <span className={fieldName}>Name: </span>
          <span>{van.name}</span>
        </li>
        <li>
          <span className={fieldName}>Category: </span>
          <span>{van.type}</span>
        </li>
        <li>
          <span className={fieldName}>Description: </span>
          {van.description}
        </li>
        <li>
          <span className={fieldName}>Visibility:</span> Public
        </li>
      </ul>
    </section>
  );
}
