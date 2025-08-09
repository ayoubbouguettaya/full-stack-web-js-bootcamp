import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import './App.css'
import AddProductForm from './components/add-product-form.jsx';
import DetailProduct from './pages/detail-product.jsx';
import AllProducts from './pages/all-products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllProducts />,
  },{
    path: '/add-new',
    element: <AddProductForm />
  },{
    path: '/products/:id',
    element: <DetailProduct />
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
