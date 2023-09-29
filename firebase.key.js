import { requireAuth } from './src/Utils/utilities';
import { app } from './firebase.config';
// Import the functions you need from the SDKs you need

import {
  doc,
  where,
  query,
  getDoc,
  setDoc,
  getDocs,
  collection,
  getFirestore,
} from 'firebase/firestore/lite';

// Your web app's Firebase configuration

// Initialize Firebase

const db = getFirestore(app);
const vansCollectionRef = collection(db, 'vans');

//Remember doc its instance of firebase where doc.data() return real data
export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  return dataArr;
}
export async function getHostedVans(request) {
  requireAuth(request);
  const filterThrough = query(vansCollectionRef, where('hostId', '==', '123'));

  const dataSnapshot = await getDocs(filterThrough);
  const hostedVans = dataSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  return hostedVans;
}
export async function getVan(id) {
  const docRef = doc(db, 'vans', id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return data;
}

getVan('6');

//setters to vans collection
async function addOneVan(van) {
  await setDoc(doc(db, 'vans', van.id), van);
}

async function addRestVans(allVans) {
  allVans.map(async v => {
    await setDoc(doc(db, 'vans', v.id), v);
  });
}
