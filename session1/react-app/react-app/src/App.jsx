import Products from "./components/products"
import Navbar from "./components/navbar"
import Sidbar from "./components/sidebar"
import "./App.css"
import OneItem from "./components/oneItem"
import Slider from "./components/slider"
import { useState } from "react"
const data = [
  {
    id: 3,
    name: 'tv',
    price: 1200
  },
  {
    id: 3,
    name: 'tv',
    price: 1200
  },
  {
    id: 3,
    name: 'tv',
    price: 1200
  }

]


const App = () => {

const dumpData = [
    'smart phone',
    'tv',
    'machine a laver'
  ]

const [orders,setOrders] = useState(dumpData)


  return (<div>
    <Navbar orders={orders} />

    <div className="container">
      <Sidbar />
      <Products setOrders={setOrders} />
    </div>

    {/* <ul className="list">
     {data.map(item => {

      return(<OneItem id={item.id} name={item.name} price={item.price}  />)
     })}
    </ul> */}

  </div>)

}


export default App