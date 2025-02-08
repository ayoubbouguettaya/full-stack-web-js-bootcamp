import { useState } from "react"

const Navbar = (props) => {

    const [showList,setShowList]= useState(false)

    return (<div className={`navbar ${showList ? 'open': 'close'}`} 
    style={{display:"flex",justifyContent:"space-between",alignItems: "center"}}
    >
       <p>LOGO</p>
       
       <button onClick={()=> setShowList(prevS => !prevS)}>
      {showList ? ' hide Cart' : 'show List' } 
       </button>
       <ul>

        {showList && props.commands.map(item => 
        <li>
            {item.name} - {item.quantity}
        </li>   )}
            </ul>
    </div>)
}

export default Navbar