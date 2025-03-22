import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Layout = () => {

  return (
    <div>
      <Navbar/>
      <main className="flex justify-center items-center w-full min-h-[90vh]">
          <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
