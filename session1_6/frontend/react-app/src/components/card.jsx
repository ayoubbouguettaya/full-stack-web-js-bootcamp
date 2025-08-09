const Card = (props) => {

    //variant    dark light

    return (<div className={props.variant === "dark" ? "card_dark" : "card_light"} >

        {props.children}

{props.withBtn && (<div>
    <button>
        submit
    </button>
</div>)}
    </div>)
}


export default Card