import s from './VanPhotos.module.css';
import { useOutletContext } from 'react-router-dom';
export const VanPhotos = () => {
  const { currentVan } = useOutletContext();
  return (
    <>
      <img
        style={{
          width: '6.4rem',
          borderRadius: '5px',
        }}
        src={currentVan.imageUrl}
      />
    </>
  );
};
