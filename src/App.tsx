import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from 'components/layout/Root';

import 'styles/main.scss';

const router  = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <h1>Home</h1>
      },
      {
        path: '/map',
        element: <h1>Map</h1>
      },
      {
        path: '/cat-finder',
        element: <h1>Cat Finder</h1>
      },
      {
        path: '/about',
        element: <h1>About</h1>
      },
      {
        path: '/contact',
        element: <h1>Contact</h1>
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
