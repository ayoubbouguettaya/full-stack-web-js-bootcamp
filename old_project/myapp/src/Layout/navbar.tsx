
const Navbar = () => {
  return (
    <div className="w-full p-4 text-white flex justify-between bg-slate-800 h-[80px]">
      <nav>Orders Managments</nav>
      <ul className="flex gap-2">
        <li><button disabled> SignUp</button></li>
      </ul>
    </div>
  );
};

export default Navbar;
