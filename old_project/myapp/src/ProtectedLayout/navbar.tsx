import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context";


const Navbar = ({}) => {

  const {setUser,user} = useContext(UserContext)
  const navigate = useNavigate();

  const handleLogOut = () => {
    setUser(null);
    localStorage.setItem("token", "");
    navigate("/login", { replace: true });
  };

  return (
    <div className="w-full p-4 text-white flex justify-between items-center bg-slate-800 h-[80px]">
      <nav>
       <Link to={"/"}> Orders Managments</Link>
        </nav>
      <ul className="flex gap-2 items-center">     
         <li> <strong> {user?.user && <p>@{user.user.userName}</p>}</strong> </li> 
         <li> <button  onClick={handleLogOut}> logout</button> </li>
      </ul>
    </div>
  );
};

export default Navbar;
