// --- Styles goes first --- //
import './App.css';
import './Root.css';
import './Variables.css';

// --- Components ahead --- //
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { VansCatalog } from './Pages/Vans/VansCatalog';
import { Host } from './Pages/Host/Host';
import { Dashboard } from './Pages/Host/Dashboard/Dashboard';
import { Income } from './Pages/Host/Income/Income';
import { Reviews } from './Pages/Host/Reviews/Reviews';
import { HostVans } from './Pages/Host/HostVans/HostVans/HostVans';
import { HostVansInfo } from './Pages/Host/HostVansInfo/HostVansInfo';
import { HostDetailedVans } from './Pages/Host/HostVans/HostDetailedVans/HostDetailedVan';
import { VanDetails } from './Pages/VanDetails/VanDetails';
import { Layout } from './Pages/Layout/Layout';

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
              {/* <Route />
              <Route /> */}
            </Route>
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
