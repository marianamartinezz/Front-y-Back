import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

import { MarcaProvider } from './context/MarcaContext.jsx'
import { ModeloProvider } from './context/ModeloContext.jsx'


const router = createBrowserRouter([
  {
    element: <App />,
    path: "/"
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MarcaProvider>
        <ModeloProvider>
          <RouterProvider router={router} />
        </ModeloProvider>
    </MarcaProvider>
  </StrictMode>,
)

