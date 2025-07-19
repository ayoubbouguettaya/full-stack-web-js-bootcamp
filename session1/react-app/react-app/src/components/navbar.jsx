import { useState } from "react";

const Navbar = (props) => {

  

  const [menuIsHidden, setMenuIsHidden] = useState(true)
  // let menuIsHidden = true
  const toggleMenu = () => {
    console.log('toggle menu clicked', menuIsHidden)
    // menuIsHidden = !menuIsHidden
    setMenuIsHidden((previousState) => {
      return !previousState
    })
  }

  return (
    <div className="navbar">
      <p>navbar</p>
      <button onClick={toggleMenu} >
        menu
      </button>

      {
        !menuIsHidden && (
          <ul className="menu">
            {props.orders.map(item => {
              return (
                <li>{item} </li>
              )
            })}
          
          </ul>
        )
      }


    </div>)
}

export default Navbar