import { Outlet } from "react-router-dom"
import Navbar from "./navbar"

const Layout = () => {


    return(<div className="container">
        <Navbar />

         <div className="main"> 

            <Outlet />      
        
         </div>
        <div className="footer">
            <p>footer</p>
        </div>

    </div>)
}

export default Layout