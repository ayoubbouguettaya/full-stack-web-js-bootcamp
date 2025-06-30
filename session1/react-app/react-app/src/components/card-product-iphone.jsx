const CardProduct = (props) => {

    return (
         <li>   <img src={props.image}/>
                <p> Nom {props.name} </p>
                <p>  {props.price} DA </p>
            </li>
    )
}

export default CardProduct

