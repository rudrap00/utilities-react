import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="w-full h-[3.5rem] bg-sky-500 flex items-center justify-center gap-10">
        <NavLink to="/">
          <div className="h-[2rem] w-[5rem] border-black border-[0.05rem] rounded-md flex items-center justify-center text-black hover:bg-sky-600 ">
            Home
          </div>
        </NavLink>
        <NavLink to="/currencyConverter">
          <div className="h-[2rem] w-[11rem] border-black border-[0.05rem] rounded-md flex items-center justify-center text-black hover:bg-sky-600 ">
            Currency Converter
          </div>
        </NavLink>
        <NavLink to="/passwordGenerator">
          <div className="h-[2rem] w-[11rem] border-black border-[0.05rem] rounded-md flex items-center justify-center text-black hover:bg-sky-600 ">
            Password Generator
          </div>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
