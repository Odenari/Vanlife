import { defer } from 'react-router-dom';
import { getVans, getVan, getHostedVans } from '../../firebase.key';
import { requireAuth } from './utilities';

const GET_ALL_VANS = '/api/vans/';
const GET_HOST_VANS = '/api/host/vans/';

export async function loadAllVans() {
  try {
    return defer({ vans: getVans() });
  } catch (err) {
    return err;
  }
}

export function loadOneVan({ params }) {
  try {
    return getVan(params.id);
  } catch (err) {
    return err;
  }
}

export async function loadHostVans({ request }) {
  try {
    return defer({ vans: getHostedVans(request) });
  } catch (err) {
    return err;
  }
}

export async function loadOneHostVan({ request, params }) {
  requireAuth(request);
  try {
    const data = await getVan(params.id);
    return data;
  } catch (err) {
    return err;
  }
}
export async function loadLogin({ request }) {
  return new URL(request.url).searchParams.get('message');
}
