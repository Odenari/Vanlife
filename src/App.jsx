// --- Styles  --- //
import './App.css';
import './Root.css';
import './Variables.css';

// --- Components  --- //
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { Layout } from './Pages/Layout/Layout';
import { VansCatalog } from './Pages/Vans/VansCatalog';
import { Login } from './Pages/Login/Login';
import { Host } from './Pages/Host/Host';
import { Income } from './Pages/Host/Income/Income';
import { Reviews } from './Pages/Host/Reviews/Reviews';
import { VanPrice } from './Pages/Host/VanPrice/VanPrice';
import { HostVans } from './Pages/Host/HostVans/HostVans';
import { VanPhotos } from './Pages/Host/VanPhotos/VanPhotos';
import { Dashboard } from './Pages/Host/Dashboard/Dashboard';
import { Error, ErrorNotFound } from './Components/Errors/ErrorNotFound';
import { VanDetails } from './Components/VanDetails/VanDetails';
import { HostVansInfo } from './Pages/Host/HostVansInfo/HostVansInfo';
import { HostDetailedVans } from './Pages/Host/HostVans/HostDetailedVans/HostDetailedVan';

// --- Libs and Utilities --- //
import {
  loadAllVans,
  loadOneVan,
  loadHostVans,
  loadOneHostVan,
  loadLogin,
} from './Utils/loaders';
import { requireAuth, actionSubmitLogin } from './Utils/utilities.js';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// --- MOCK SERVER --- //
import '../server.js';

// --- creating router which support a data layer API (loader, action) --- //
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route
        path='vans'
        element={<VansCatalog />}
        loader={loadAllVans}
        errorElement={<Error />}
      />
      <Route path='vans/:id' element={<VanDetails />} loader={loadOneVan} />

      <Route
        path='host'
        element={<Host />}
        loader={async ({ request }) => requireAuth(request)}
        errorElement={<Error />}
      >
        <Route loader={loadHostVans} index element={<Dashboard />} />
        <Route path='income' element={<Income />} />
        <Route path='vans' element={<HostVans />} loader={loadHostVans} />
        <Route path='reviews' element={<Reviews />} />
        <Route
          path='vans/:id/'
          element={<HostVansInfo />}
          loader={loadOneHostVan}
        >
          <Route index element={<HostDetailedVans />} />
          <Route path='pricing' element={<VanPrice />} />
          <Route path='Photos' element={<VanPhotos />} />
        </Route>
      </Route>
      <Route
        path='/login'
        element={<Login />}
        loader={loadLogin}
        action={actionSubmitLogin}
      />
      <Route path='*' element={<ErrorNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
