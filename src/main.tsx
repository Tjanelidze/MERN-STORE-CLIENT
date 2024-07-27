import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import App from './App.tsx';
import GlobalStyles from './styles/GlobaltStyles.ts';
import AppLayout from './ui/AppLayout.tsx';
import Main from './pages/Main.tsx';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);
