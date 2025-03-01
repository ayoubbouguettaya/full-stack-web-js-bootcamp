import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './components/hello'
import Navbar from './components/navbar'
import { Order } from './types'

function App() {
  const [orders, setOrders] = useState<Order[]>([])

  return (
    <>
      <div>
        <Navbar orders={orders} />
        
      <HelloWorld name='djfhbvd' />
        </div>
    </>
  )
}

export default App
