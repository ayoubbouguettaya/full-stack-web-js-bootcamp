import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './pages/App.jsx'
import Example from './components/example-tailwind.jsx';
import AboutUsPage from './pages/about.jsx';
import Layout from './components/layout.jsx';
import Layout2 from './components/layout2.jsx';
import Formulaire2 from './components/form2.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: '/list-products',
    element: <Example />
  },{
    path: '/products/:id',
    element: <AboutUsPage />
  }
]);


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
  
    
//     children: [
//       {
//         path: "/",
//         element: <App />,
//       }, {
//         path: '/list-products',
//         element: <Example />
//       }, {
//         path: '/about',
//         element: <AboutUsPage />
//       },{
//         path: '/cart',
//         element: <div>test</div>
//       }
//     ]

//   }
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
