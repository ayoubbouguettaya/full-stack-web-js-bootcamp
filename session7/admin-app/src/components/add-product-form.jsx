 import { useState } from "react"

const AddProductForm = () => {

    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(0)

    const handleOnChange = (event) => {

        if (event.target.name === "productName") {
            console.log('handle on change product')
            setName(event.target.value)
        }

        if (event.target.name === "quantity") {
            console.log('handle on change quatutty')
            setQuantity(event.target.value)
        }
    }

    const handleAddProduct = async () => {
     const response=  await fetch("http://localhost:3000/products",{
        body: JSON.stringify({name,quantity}),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
       })

       console.log(response)

    }

    return (<form className="form">
        <label>
            Name
            <input
                name="productName"
                value={name}
                onChange={handleOnChange}
            />
        </label>

        <label>
            Quantity
            <input
                name="quantity"
                type="number"
                value={quantity}
                onChange={handleOnChange}
            />
        </label>
  <div>
    <p>Name {name}</p>
    <p>Quantity {quantity}</p>
  </div>
  
        <button onClick={handleAddProduct}> Ajouter</button>
    </form>)

}

export default AddProductForm