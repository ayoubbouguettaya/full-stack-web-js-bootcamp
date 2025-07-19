import CardProduct from "./card-product"

const Products = (props) => {

    
    return (<div className="main">
        <ul>
            
            <CardProduct quantity={60} setOrders={props.setOrders} image="/tech-logo/css.svg" name="iphone" price="1300" />
            <CardProduct setOrders={props.setOrders} image="/tech-logo/js.svg" name="sdsd" price="1300" />
            <CardProduct setOrders={props.setOrders} image="/tech-logo/aws.svg" name="dsd" price="1300" />
            <CardProduct setOrders={props.setOrders} image="/tech-logo/.svg" name="pc" price="1300" />
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