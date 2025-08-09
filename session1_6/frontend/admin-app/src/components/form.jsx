import { useEffect, useState } from "react";

const Formulaire = () => {

    const [productName,setProductName] = useState("")
    const [price,setprice] = useState("")



    const handleOnChange = (event) => {
         
         
          if(event.target.name == "input1"){
              setProductName(event.target.value)
            }

            if(event.target.name == "input2"){
              setprice(event.target.value)
            }
    }

    const submit = (event) => {

        event.preventDefault()

        console.log(productName,price)

    }

    return(<form className="form">
        <div style={{display: "flex"}}>
        <label>
            product Name
        </label>
            <input
            name="input1"
            value={productName}
            onChange={handleOnChange}
            />
        </div>

        <div style={{display: "flex"}}>
        <label>
            Price
        </label>
            <input
            name="input2"
            value={price}
            onChange={handleOnChange}
            />
        </div>

        <button onClick={submit}>
            ADD
        </button>
    </form>)
}

export default Formulaire;