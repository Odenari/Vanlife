import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='main-container'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
