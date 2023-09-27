import { redirect } from 'react-router-dom';

//? Async function cuz we need return Promise in loader() that allows us to check for if user are logged simultaneously in every component also token isLogged is hardcoded value so just pretend it comes from database or server

export async function requireAuth() {
  const message = '?message=Sorry you need to be logged in.';
  const isLogged = false;
  if (!isLogged) {
    //* It's silly, but it works. This hack exist cause we are using MirageJS
    //* And with v6.4.5 of Router redirect is require body now
    const response = redirect(`/login${message}`);
    response.body = true;
    return response;
  }
  return null;
}

export async function requestVans(path, id) {
  if (id) {
    path += id;
  }
  const res = await fetch(path);
  if (res.ok) {
    const data = await res.json();
    return data.vans;
  }
  if (!res.ok) {
    return Promise.reject({
      message: 'Failed to fetch vans.',
      status: res.status,
      statusText: res.statusText,
    });
  }
}

//* --- NON FETCHING UTILS ---
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
