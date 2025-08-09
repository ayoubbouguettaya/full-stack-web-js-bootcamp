import { useEffect } from "react"

const NavbarMenuList = (props) => {



    useEffect(()=> {

        console.log("on Mount  ==> menu list in navabr")

        return () => {
            console.log("unMount ==> menu list in navbar ")
        }
    },[])

    return(  <ul className="menu">
            {props.orders.map(item => {
              return (
                <li>{item} </li>
              )
            })}
          
          </ul>)
}

export default NavbarMenuList