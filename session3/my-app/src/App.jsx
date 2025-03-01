import { useState } from 'react'
import './App.css'
// import Navbar from './components/navbar'
import ProductsDisplay from './components/product-display'
import SideBar from './components/sidebar'
import Layout from './components/layout'

function App() {
  const [orders, setOrders] = useState([])

  /*
    return (
      <div>
        <Navbar orders={orders} />
        <div style={{ display: "flex" }}>
          <SideBar />
          <ProductsDisplay orders={orders} setOrders={setOrders} />
        </div>
      </div>)
  */

  return (<Layout orders={orders}>
    <SideBar />
    <ProductsDisplay orders={orders} setOrders={setOrders} />
  </Layout>)
}

export default App
