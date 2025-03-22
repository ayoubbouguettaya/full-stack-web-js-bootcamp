import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../context";
import styles from "./layout.module.css"

const ProtectedLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  
  // remplace cette ligne par l'utilisation du context
  // const [user, setUser] = useState<UserData>();

  const {setUser,user} = useContext(UserContext);
  
  const navigate = useNavigate();

  

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login", { replace: true });
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:3000/users/current",
          { headers: { Authorization: token } }
        );

        const url = "http://localhost:3000/users/" + (user.isConnected ? "/": "/admin")
        setUser({user: response.data,isConnected: true});
      } catch (error) {
        navigate("/login", { replace: true });
      }
      setIsLoading(false);
    };

    fetchUser();
  }, []);

  return (
    <div className={styles.container}>
      {/* <Navbar logout={handleLogOut} data={user} /> */}
      <Navbar  />

      <main className="flex justify-center items-center my-2 w-full min-h-[90vh]">
        {isLoading ? (
          <img width={40} height={40} src="/spinner.svg" />
        ) : (
          <Outlet />
        )}
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default ProtectedLayout;
