import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app/root';
import HomePage from './app/routes/home';
import ProjetosPage from './app/routes/projetos';
import ArquivosPage from './app/routes/arquivos';
import ContatoPage from './app/routes/contato';
import './app/app.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projetos', element: <ProjetosPage /> },
      { path: 'arquivos', element: <ArquivosPage /> },
      { path: 'contato', element: <ContatoPage /> }
    ]
  }
]);

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(<RouterProvider router={router} />);
}
