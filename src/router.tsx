import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import ErrorPage from './pages/ErrorPage';
import FiltersAndLabels from './pages/FiltersAndLabels';
import Inbox from './pages/Inbox';
import Project from './pages/Project';
import Today from './pages/Today';
import Upcoming from './pages/Upcoming';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'inbox',
        element: <Inbox />
      },
      {
        path: 'today',
        element: <Today />
      },
      {
        path: 'upcoming',
        element: <Upcoming />
      },
      {
        path: 'filters-labels',
        element: <FiltersAndLabels />
      },
      {
        path: 'project/:projectId',
        element: <Project />
      }
    ]
  }
]);

export default router;
