import { useState } from 'react';
import Projects from '../Projects';

const topMenu = [
  { id: 'inbox', title: 'Inbox' },
  { id: 'today', title: 'Today' },
  { id: 'upcoming', title: 'Upcoming' },
  { id: 'filters-and-labels', title: 'Filters & Labels' }
];

const Sidebar = () => {
  const [selected, setSelected] = useState([]);

  return (
    <aside data-testid='sidebar'>
      <ul className='top-menu'>
        {topMenu.map(menuItem => (
          <li key={menuItem.id}>{menuItem.title}</li>
        ))}
      </ul>
      <Projects />
    </aside>
  );
};

export default Sidebar;
