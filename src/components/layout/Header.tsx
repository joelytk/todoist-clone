import { BsPlusLg, BsSun } from 'react-icons/bs';

const Header = () => {
  return (
    <header data-testid='header'>
      <div className='logo'>
        <img src='/vite.svg' alt='Todoist' />
      </div>

      <div className='settings'>
        <button>
          <BsPlusLg fontSize={24} />
        </button>
        <button>
          <BsSun fontSize={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
