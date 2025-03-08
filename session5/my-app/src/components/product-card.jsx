const ProductCard = ({id,image,name,price,quantity,handleAddCart}) => {

    

    return (<li key={id}>
        <img src={image} alt={name} />
        <div>
            <p>{name}</p>
            <p style={{ color: "orange" }}>{price} € </p>
            {quantity === 0
                ? <p style={{ color: "red" }}> out of stock </p>
                : <p> stock  {quantity}</p>
            }
            <button 
            
            disabled={quantity === 0}
            onClick={() => { handleAddCart({name,price,quantity}) }}>
                Add Cart
            </button>
        </div>
    </li>)
}

export default ProductCard