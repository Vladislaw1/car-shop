import { createBrowserRouter } from 'react-router-dom';
import { Contact, Layout, Main } from './pages';

export const routing = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [{
    index: true,
    element: <Main />,
  }, {
    path: '/contact',
    element: <Contact />,
  }],
}]);