import { textContent } from './HostDetailedVan.module.css';
import { useOutletContext } from 'react-router-dom';

export const HostDetailedVans = () => {
  const { currentVan } = useOutletContext();
  return (
    <section>
      <ul className={textContent}>
        <li>
          <span>Name: </span>
          {currentVan.name}
        </li>
        <li>
          <span>Category: </span>
          {currentVan.type}
        </li>
        <li>
          <span>Description: </span>
          {currentVan.description}
        </li>
        <li>
          <span>Visibility:</span> Public
        </li>
      </ul>
    </section>
  );
};
