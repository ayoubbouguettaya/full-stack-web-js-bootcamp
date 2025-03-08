import { useState ,useEffect} from "react"
import ProductCard from "./product-card"


const ProductsDisplay = (props) => {

    const [products,setProducts] = useState([])

    useEffect(()=> {
        const fetchData = async () => {

            const data = await fetch("http://localhost:3000/products")
            const result = await data.json() 
        
            setProducts(result)
        }  

        fetchData()

    },[])


    const handleAddCart = (newOrder) => {
        /**
         * newOrder  : { name, price , quantity ,....}
         */

        const productFound = products.find((item=> item.name === newOrder.name))
       
        // productFound.quantity--;
        productFound.quantity = productFound.quantity - 1;

        console.log(productFound)

        setProducts([...products])


        const orderFound = props.orders.find(item=> item.name === newOrder.name)

        if(!orderFound){
            /** first order */
            props.orders.push({name:newOrder.name,price:newOrder.price,quantity: 1})
        }else {
            // orderFound.quantity ++
            orderFound.quantity = orderFound.quantity + 1;

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