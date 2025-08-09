import { useState } from "react"

const CardProduct = (props) => {

    const [availableQuantity,setavailableQuantity] = useState(props.quantity)

    const addCart = () => {


        
        
        
        if(availableQuantity == 0) return;
        
        setavailableQuantity((prevS) => {
            return prevS - 1
        })
        console.log('#### ADD CART',props.orders)
        props.setOrders((prevS)=> {
            
            const allOrders = [props.name,...prevS]
            localStorage.setItem("orders",JSON.stringify(allOrders))

            return ([props.name,...prevS])
        })
    }

    return (
         <li>
          <img width={300} height={300} src={props.image} />
          <p>{props.name}</p>
          <p>{props.price} DA</p>
          <p>Quantity {availableQuantity}</p>
          <button onClick={addCart} >Add Cart</button>
     </li>
    )
}

export default CardProduct

