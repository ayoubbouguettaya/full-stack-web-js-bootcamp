import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import ProductsDisplay from './components/product-display'
import SideBar from './components/sidebar'

function App() {
  const [orders,setOrders] = useState([])

  return (
    <div>
      <Navbar orders={orders} />
      <div style={{ display: "flex" }}>
        <SideBar />
        <ProductsDisplay orders={orders} setOrders={setOrders} />
      </div>
    </div>)
}

export default App
