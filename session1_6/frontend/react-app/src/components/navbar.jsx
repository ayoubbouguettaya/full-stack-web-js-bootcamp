import { useEffect, useState } from "react";
import NavbarMenuList from "./navbar-menu-list";

const Navbar = (props) => {

  

  const [menuIsHidden, setMenuIsHidden] = useState(true)
  // let menuIsHidden = true


  useEffect(()=> {
// console.log("menuIsHidden  is changing")
  },[menuIsHidden])

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
          <NavbarMenuList orders={props.orders} />
        )
      }


    </div>)
}

export default Navbar