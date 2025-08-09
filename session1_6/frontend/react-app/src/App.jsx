import Products from "./components/products"
import Navbar from "./components/navbar"
import Sidbar from "./components/sidebar"
import "./App.css"
import OneItem from "./components/oneItem"
import Slider from "./components/slider"
import { useEffect, useState } from "react"
import Layout from "./components/layout"
import Card from "./components/card"
import {LoaderCircle} from "lucide-react"

const App = () => {

   const savedOrders =  JSON.parse(localStorage.getItem("orders")) || []

  const [orders,setOrders] = useState(savedOrders)
  const [products,setProducts] = useState([])

  const [isLoading,setIsLoading] = useState(true)
  const [error,setError] = useState("")

  useEffect(()=> {

    setIsLoading(true)
    fetch("http://localhost:3000/").then(response => {
      response.json().then(data => {
         console.log(data)
        setIsLoading(true)
        setProducts(data)
            console.log("request end")

      })
    }).catch(error => {
      setError("Internal server error 500")
      setIsLoading(false)
    })

    console.log("onMount  / first render  app.js")

  },[])

  useEffect(()=> {
    // debug
    console.log("Re render of  products /  app.js",products)

  },[products])


  return (<div>
    <Navbar orders={orders} />

     <div className="container">
      <Sidbar />
      <Products setOrders={setOrders} />
    </div> 
{/* 
{error && <p style={{color: "red"}}>{error}</p>}
{isLoading ? <div className="loader" > <LoaderCircle size={90} /> </div> : 
    <ul className="list">
     {products.map(item => {
       
       return(<OneItem id={item.id} name={item.name} price={item.price}  />)
      })}
    </ul>
    } */}

  </div>)

}


export default App