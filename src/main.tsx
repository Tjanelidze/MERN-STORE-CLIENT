import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import App from './App.tsx';
import GlobalStyles from './styles/GlobaltStyles.ts';
import AppLayout from './ui/AppLayout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);
