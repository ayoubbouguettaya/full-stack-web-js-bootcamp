import { useState } from "react"
import ProductCard from "./product-card"
import { Order, Product } from "../types"

const data = [{
    name: 'tv',
    price: 120000,
    quantity: 6,
    image: '/products/tv.jpeg',
    id: 1
},
{
    name: 'smartphone',
    price: 100000,
    quantity: 3,
    image: '/products/tv.jpeg',
    id: 3
},
{
    name: 'play station',
    price: 50000,
    quantity: 1,
    image: '/products/tv.jpeg',
    id: 2
}]

type Props = {
    orders: Order[],
    setOrders: (orders: Order[]) => void
}
const ProductsDisplay = (props: Props) => {

    const [products,setProducts] = useState(data)

    const handleAddCart = (newOrder: Product) => {
        /**
         * newOrder  : { name, price , quantity ,....}
         */

        const productFound = products.find((item=> item.name === newOrder.name))
       
        if(productFound)
            productFound.quantity --;

        console.log(productFound)

        setProducts([...products])


        const orderFound = props.orders.find(item=> item.name === newOrder.name)

        if(!orderFound){
            /** first order */
            props.orders.push({name:newOrder.name,price:newOrder.price,quantity: 1})
        }else {
            orderFound.quantity ++
        }

        props.setOrders([...props.orders])
    }


    return (
        <div className="product_display">
            <ul>
                {products.map(item => {
                    return <ProductCard
                    key={item.id}
                     id={item.id}
                      name={item.name}
                      image={item.image}
                      price={item.price}
                      quantity={item.quantity}
                      handleAddCart={handleAddCart} />
                })}
            </ul>
        </div>)
}

export default ProductsDisplay