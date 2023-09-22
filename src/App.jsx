// --- Styles goes first --- //
import './App.css';
import './Root.css';
import './Variables.css';

// --- Components ahead --- //
import { NavBar } from './Components/NavBar/NavBar';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { VansCatalog } from './Pages/Vans/VansCatalog';
import { Footer } from './Components/Footer/Footer';

// --- Libs and Utilities --- //
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- MOCK SERVER --- //
import '../server.js';
import { VanDetails } from './Pages/VanDetails/VanDEtails';

function App() {
  return (
    <div className='main-container'>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/vans' element={<VansCatalog />}></Route>
            <Route path='/vans/:id' element={<VanDetails />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
