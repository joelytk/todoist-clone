import { Outlet } from 'react-router-dom';

import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

import './App.scss';

const App = () => {
  return (
    <>
      <Header />
      <div className='content'>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default App;
