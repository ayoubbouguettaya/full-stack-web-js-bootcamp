import { useState } from "react"

const Navbar = (props) => {
    const [isShow, setIsShow] = useState(false)

    return (
        <div className="navbar">
            <p>LOGO</p>
            <button onClick={() => setIsShow(prev => !prev)}>
                cart {`(${props.orders.length})`}

                {isShow ? '↑' : '↓'}
            </button>
            <ul className="commands">
                {isShow && props.orders.map(item => {
                    return <li>
                        <p> {item.name} </p>
                        <p>  <span style={{ color: "orange" }}>{item.price} DA </span>
                            x   {item.quantity} = <span style={{ color: "orange" }}>{item.price * item.quantity}</span>  </p>
                    </li>
                })}
            </ul>
        </div>)
}

export default Navbar