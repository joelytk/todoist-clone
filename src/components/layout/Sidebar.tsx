const Sidebar = () => {
  return (
    <aside className='sidebar' data-testid='sidebar'>
      <ul className='sidebar__generic'>
        <li>Inbox</li>
        <li>Today</li>
        <li>Upcoming</li>
        <li>Filters &amp; Labels</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
