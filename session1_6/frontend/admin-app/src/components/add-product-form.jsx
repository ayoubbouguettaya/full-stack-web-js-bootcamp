import { useState } from "react"

const AddProductForm = () => {

    const [productName,setProductName] = useState("")
    const [price,setPrice] = useState("")
        const [quantity,setQuantity] = useState("")


    const handleSumbit = async (event) => {
        event.preventDefault()

        console.log("handle sumbit ")


        const data = {
                productName,price,quantity
            }


        fetch("http://localhost:3000/",{
            body: JSON.stringify(data),
             headers: {
               "Content-Type": "application/json",
            },
            method: 'POST'
        })
    }

    const handleOnChange = (event) => {

        console.log("name",event.target.name)
        console.log("value",event.target.value)
       
         if(event.target.name === "productName"){
             setProductName(event.target.value)
         }
          if(event.target.name === "price"){
             setPrice(event.target.value)
         }
          if(event.target.name === "quantity"){
             setQuantity(event.target.value)
         }
    }

    return(<form className="form">
        <label>Product Name</label>
        <input
        name="productName"
        value={productName}
        onChange={handleOnChange}
        type="text" />

        <label>Price</label>
        <input
        name="price"
        value={price}
        onChange={handleOnChange}
        type="text" />

         <label>quantity</label>
        <input
        name="quantity"
        value={quantity}
        onChange={handleOnChange}
        type="text" />

        <button onClick={handleSumbit}>Sumbit</button>
    </form>)
}

export default AddProductForm