// --- Styles  --- //
import './App.css';
import './Root.css';
import './Variables.css';

// --- Components  --- //
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { Layout } from './Pages/Layout/Layout';
import VansCatalog, { loader as loadVans } from './Pages/Vans/VansCatalog';

import { Host } from './Pages/Host/Host';
import { Income } from './Pages/Host/Income/Income';
import { Reviews } from './Pages/Host/Reviews/Reviews';
import { VanPrice } from './Pages/Host/VanPrice/VanPrice';
import { HostVans } from './Pages/Host/HostVans/HostVans';
import { VanPhotos } from './Pages/Host/VanPhotos/VanPhotos';
import { Dashboard } from './Pages/Host/Dashboard/Dashboard';
import { ErrorNotFound } from './Pages/Error/ErrorNotFound';
import { VanDetails } from './Components/VanDetails/VanDetails';
import { HostVansInfo } from './Pages/Host/HostVansInfo/HostVansInfo';
import { HostDetailedVans } from './Pages/Host/HostVans/HostDetailedVans/HostDetailedVan';

// --- Libs and Utilities --- //
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// --- MOCK SERVER --- //
import '../server.js';

// --- creating router which support a data layer API (lazy,loader. action etc.) --- //
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='vans' element={<VansCatalog />} loader={loadVans} />
      <Route path='vans/:id' element={<VanDetails />} />

      <Route path='host' element={<Host />}>
        <Route index element={<Dashboard />} />
        <Route path='income' element={<Income />} />
        <Route path='vans' element={<HostVans />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='vans/:id/' element={<HostVansInfo />}>
          <Route index element={<HostDetailedVans />} />
          <Route path='pricing' element={<VanPrice />} />
          <Route path='Photos' element={<VanPhotos />} />
        </Route>
      </Route>
      <Route path='*' element={<ErrorNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
