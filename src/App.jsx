// --- Styles  --- //
import './App.css';
import './Root.css';
import './Variables.css';

// --- Components  --- //
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { VansCatalog } from './Pages/Vans/VansCatalog';
import { Layout } from './Pages/Layout/Layout';

import { Host } from './Pages/Host/Host';
import { Income } from './Pages/Host/Income/Income';
import { Reviews } from './Pages/Host/Reviews/Reviews';
import { VanPrice } from './Pages/Host/VanPrice/VanPrice';
import { VanDetails } from './Pages/VanDetails/VanDetails';
import { VanPhotos } from './Pages/Host/VanPhotos/VanPhotos';
import { Dashboard } from './Pages/Host/Dashboard/Dashboard';
import { HostVans } from './Pages/Host/HostVans/HostVans/HostVans';
import { HostVansInfo } from './Pages/Host/HostVansInfo/HostVansInfo';
import { HostDetailedVans } from './Pages/Host/HostVans/HostDetailedVans/HostDetailedVan';
// --- Libs and Utilities --- //
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- MOCK SERVER --- //
import '../server.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<VansCatalog />} />
          <Route path='vans/:id' element={<VanDetails />} />

          <Route path='host' element={<Host />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id/' element={<HostVansInfo />}>
              <Route index element={<HostDetailedVans />} />
              <Route path='pricing' element={<VanPrice />} />
              <Route path='Photos' element={<VanPhotos />} />
            </Route>
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
