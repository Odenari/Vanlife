// --- Sorting v1 --- //

/* To make this work pass to filters / buttons those props 
isActive={isActive}
toggleFilter={() => {handleSort(vans, filter);}}

*/

import { useState } from 'react';

export const useFilterSort = () => {
  const [isActive, setIsActive] = useState('');
  const [filteredVans, setFilteredVans] = useState([]);

  return function handleSort(vanList, filter) {
    setIsActive(filter);
    setFilteredVans(
      vanList.filter(i => {
        if (i.type === filter) return i;
      })
    );
  };
};
