import { useOutletContext } from 'react-router-dom';

export const VanPrice = () => {
  const { currentVan } = useOutletContext();

  return (
    <h3 style={{ margin: '2rem auto' }}>
      {`$${currentVan.price}/day` + ' 🐶 '}
    </h3>
  );
};
