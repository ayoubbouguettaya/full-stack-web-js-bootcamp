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

        <button> Ajouter</button>
    </form>)

}

export default AddProductForm