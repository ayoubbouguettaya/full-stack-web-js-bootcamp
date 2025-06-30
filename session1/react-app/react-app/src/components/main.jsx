import CardProduct from "./card-product-iphone"

const Main = () => {

    const products = [
        { productName: "product1", imageSrc: "./tech-logo/aws.svg", discount: false },
        { productName: "product2", imageSrc: "./tech-logo/aws.svg", discount: false },
        { productName: "product3", imageSrc: "./tech-logo/aws.svg", discount: false },
        { productName: "product4", imageSrc: "./tech-logo/aws.svg", discount: false },
        { productName: "product5", imageSrc: "./tech-logo/aws.svg", discount: false },
        { productName: "product6", imageSrc: "./tech-logo/aws.svg", discount: false },
        { productName: "product7", imageSrc: "./tech-logo/aws.svg", discount: false },
        { productName: "product8", imageSrc: "./tech-logo/aws.svg", discount: false },
    ]

    return (<div className="main">
        <ul>

            <CardProduct image="./react.js" name="television" price={"424234"} />
            <CardProduct image="./vite.svg" name="iphone" price={"424234"} />

            {/* {products.map( (item) => {
                return(<CardProduct 
                     productName={item.productName} 
                     discount={item.discount} 
                     imageSrc={item.imageSrc}  />)

            })} */}
        </ul>
    </div>)
}

export default Main

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