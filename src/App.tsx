import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from 'components/pages/Home';
import Map from 'components/pages/Map';
import CatFinder from 'components/pages/CatFinder';
import About from 'components/pages/About';
import Contact from 'components/pages/Contact';
import CatDetails from 'components/pages/CatDetails';

import Root from 'components/layout/Root';

import 'styles/main.scss';

const router  = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/map',
        element: <Map />
      },
      {
        path: '/cat-finder',
        element: <CatFinder />
      },
      {
        path: '/cat-finder/:id',
        element: <CatDetails />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
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
