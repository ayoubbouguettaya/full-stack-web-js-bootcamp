type Product = {
    id: string
    name: string
    quantity: number
    price: string
    image: string
}

type ProductCardProps = Product & {
    handleAddCart: (item: Product) => void
}

const ProductCard = (props: ProductCardProps) => {

    return (
    <li key={props.id}>
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