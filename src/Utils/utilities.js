export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const getActiveFilters = provider => {
  const holder = {};
  provider.map(item => (holder[item] = false));
  return holder;
};

export function superbClear(...fns) {
  fns.map(fn => fn(false));
}

export function filterByType(list, type) {
  return list.filter(van => van.type === type);
}

export const resolveSearchParams = (key, value, initialParams) => {
  const sp = new URLSearchParams(initialParams);
  if (!value) {
    sp.delete(key);
  } else {
    sp.set(key, value);
  }
};

export const setActiveStyles = (flag, type) => {
  const backgrounds = {
    default: '#ffead0',
    simple: '#e17654',
    rugged: '#161616',
    luxury: '#115e59',
  };

  if (!flag && !type) {
    throw new Error(`Argument is missing in setActiveStyles function `);
  }
  if (flag === type) {
    return {
      color: '#FFF',
      background: backgrounds[flag],
    };
  }
};
