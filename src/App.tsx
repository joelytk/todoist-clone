import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Tasks from './components/Tasks';

import './App.scss';

const App = () => {
  return (
    <>
      <Header />
      <div className='content'>
        <Sidebar />
        <main>
          <Tasks />
        </main>
      </div>
    </>
  );
};

export default App;
