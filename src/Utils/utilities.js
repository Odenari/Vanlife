import { redirect } from 'react-router-dom';

//action fn for the FORM
export async function actionSubmitLogin({ request }) {
  //* formData helps to grab body of post request from fetch()
  const formData = await request.formData();

  //* now we can extract input fields by input name and do what we want with them
  const email = formData.get('email');
  const password = formData.get('password');
  const path = new URL(request.url).searchParams.get('redirectBack') || '/host';

  //* try to log in
  try {
    const data = await loginUser({ email, password });
    if (data.token) {
      localStorage.setItem('isLogged', true);
      const res = redirect(path);
      //hack
      res.body = true;
      return res;
    }
    if (!data.token) throw { message: 'Please provide correct credentials' };
  } catch (er) {
    return er.message;
  }
}

//* Async post function for checking data on server and grab token ig it is true
export async function loginUser(credentials) {
  const res = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify(credentials),
  });
  const data = await res.json();
  if (!res.ok) {
    localStorage.removeItem('isLogged');
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}

//? Async function cuz we need return Promise in loader() that allows us to check up if user are logged simultaneously in every component also token isLogged comes from local storage so lets just pretend it comes from server

export async function requireAuth(request) {
  let isLogged = localStorage.getItem('isLogged');
  if (!isLogged) {
    const path = new URL(request.url).pathname;
    0;
    const message = '?message=Sorry you need to be logged in.';

    // And with v6.4.5 of Router redirect is require body now
    // It's silly, but it works. This hack exist cause we are using MirageJS
    const response = redirect(`/login${message}&redirectBack=${path}`);
    response.body = true;
    return response;
  } else {
    return isLogged;
  }
}

//old version w/o database
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
export const sleep = ms =>
  new Promise(r => {
    console.log('Start', ms);
    setTimeout(r, ms);
  });

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
