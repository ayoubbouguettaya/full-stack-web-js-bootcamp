import { useEffect, useState } from "react"
import CardProduct from "./card-product"

const Products = (props) => {

    const [data,setData]= useState([])

    useEffect(()=> {

        fetch("http://localhost:3000/").then(response => {

            response.json().then((result => {
                 
                setData(result)
            }))
        })
    },[])
  
    return (<div className="main">
        <ul>
{data.map(item => {

    return <CardProduct quantity={item.quantity}
     setOrders={props.setOrders}
      image={item.image} 
      name={item.name}
       price={item.price} />
})}
        </ul>

    </div>)
}

export default Products













// import CardProduct from "./card-product"

// const Main = () => {

//     return (<div className="main">
//         <ul>
//             <CardProduct discount={false} productName="product1" imageSrc="./tech-logo/aws.svg" />
//             <CardProduct discount={true} productName="product2" imageSrc="./tech-logo/aws1.svg" />
//             <CardProduct discount={false} productName="product3" imageSrc="./tech-logo/azure.svg" />
//             <CardProduct discount={false} productName="product4" imageSrc="./tech-logo/css.svg" />
//             <CardProduct discount={false} productName="product5" imageSrc="./tech-logo/" />
//             <CardProduct discount={false} productName="product6" imageSrc="./tech-logo/" />
//             <CardProduct discount={false} productName="product7" imageSrc="./tech-logo/" />
//             <CardProduct discount={false} productName="product8" imageSrc="./tech-logo/" />
//         </ul>
//     </div>)
// }

// export default Main