import { requestVans } from './utilities';
import { defer } from 'react-router-dom';

const GET_ALL_VANS = '/api/vans/';
const GET_HOST_VANS = '/api/host/vans/';

export async function loadAllVans() {
  try {
    return defer({ vans: requestVans(GET_ALL_VANS) });
  } catch (err) {
    console.log(err);
  }
}

export function loadOneVan({ params }) {
  try {
    return requestVans(GET_ALL_VANS, params.id);
  } catch (err) {
    console.log(err);
  }
}
export async function loadLogin({ request }) {
  return new URL(request.url).searchParams.get('message');
}

export async function loadHostVans() {
  try {
    return defer({ vans: requestVans(GET_HOST_VANS) });
  } catch (err) {
    console.log(err);
  }
}

export async function loadOneHostVan({ params }) {
  try {
    const data = await requestVans(GET_HOST_VANS, params.id);
    return data;
  } catch (err) {
    console.log(err);
  }
  // return null;
}
