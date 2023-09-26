export async function requestVans(path) {
  const res = await fetch(path);
  if (res.ok) {
    const data = await res.json();
    return data.vans;
  }
  if (!res.ok) {
    return Promise.reject({
      message: 'Error occurred =/',
      status: res.status,
      statusText: res.statusText,
    });
  }
}
export async function setVansAndTypes(data, setter, uniqTypes) {
  setter(data.vans);
  !uniqTypes.length && uniqTypes.push(...getUniqTypes(data.vans));
}

export async function getVansTestErrors() {
  const res = await fetch('/api/vans');
  if (res.status === 500) {
    throw {
      message: 'Failed to fetch vans',
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export const getUniqTypes = data => [...new Set(data.map(o => o.type))];
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

export const manageSearchParams = (key, value, initialParams) => {
  const sp = new URLSearchParams(initialParams);
  if (!value) {
    sp.delete(key);
  } else {
    sp.set(key, value);
  }
  return `?${sp.toString()}`;
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

export const generatePath = type => {
  if (!type) {
    return '..';
  } else {
    return `../?type=${type}`;
  }
};
