import Navbar from "./navbar"

const Layout = (props) => {
    return (
        <div>
        <Navbar orders={props.orders} />
        <div style={{ display: "flex" }}>
            {props.children}
        </div>
      </div>
    )
}

export default Layout