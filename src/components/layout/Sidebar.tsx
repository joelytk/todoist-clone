import { useState } from 'react';
import {
  BsCalendarDate,
  BsCalendarWeek,
  BsGrid,
  BsInbox
} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

import Projects from '../Projects';

const topMenu = [
  {
    id: 'inbox',
    icon: <BsInbox color='#246fe0' />,
    title: 'Inbox',
    path: '/inbox'
  },
  {
    id: 'today',
    icon: <BsCalendarDate color='#4b9244' />,
    title: 'Today',
    path: '/today'
  },
  {
    id: 'upcoming',
    icon: <BsCalendarWeek color='#692ec2' />,
    title: 'Upcoming',
    path: '/upcoming'
  },
  {
    id: 'filters-and-labels',
    icon: <BsGrid color='#c77100' />,
    title: 'Filters & Labels',
    path: '/filters-labels'
  }
];

const Sidebar = () => {
  return (
    <aside data-testid='sidebar'>
      <nav className='top-menu'>
        {topMenu.map(menuItem => (
          <NavLink
            key={menuItem.id}
            to={menuItem.path}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {menuItem.icon} {menuItem.title}
          </NavLink>
        ))}
      </nav>
      <Projects />
    </aside>
  );
};

export default Sidebar;
