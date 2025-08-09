import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const DetailProduct = () => {


    const [product,setProduct] = useState(null)

    const { id } = useParams()

    useEffect(() => {


        const fetchDetailProduct = async () => {

            const response = await fetch(`http://localhost:3000/detail/${id}`)
            const data = await response.json()

            setProduct(data)

            console.log("###################", data)
        }

        fetchDetailProduct()
        //fetch product detail

        // href  '/products/${id}'
    }, [id])


    return <div>

        <h1>Detail Product</h1>

        {product && (<div>

            <p>Name {product.name}</p>
            <p>Price {product.price}</p>
            <p>Quantity {product.quantity}</p>
        </div>)}
    </div>
}

export default DetailProduct