import { Product } from "../types"

type Prop = Product & {
    handleAddCart: (newOrder: Product) => void
}


const ProductCard = (props: Prop) => {

    return (<li key={props.id}>
        <img src={props.image} alt={props.name} />
        <div>
            <p>{props.name}</p>
            <p style={{ color: "orange" }}>{props.price} € </p>
            {props.quantity === 0
                ? <p style={{ color: "red" }}> out of stock </p>
                : <p> stock  {props.quantity}</p>
            }
            <button 
            
            disabled={props.quantity === 0}
            onClick={() => { props.handleAddCart(props) }}>
                Add Cart
            </button>
        </div>
    </li>)
}

export default ProductCard