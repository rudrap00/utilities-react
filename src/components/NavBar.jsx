import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="w-full h-[3.5rem] bg-sky-500 flex items-center justify-center gap-10">
        <div className="h-[2rem] w-[5rem] border-black border-[0.05rem] rounded-md flex items-center justify-center text-black hover:bg-sky-600 ">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="h-[2rem] w-[11rem] border-black border-[0.05rem] rounded-md flex items-center justify-center text-black hover:bg-sky-600 ">
          <NavLink to="/currencyConverter">Currency Converter</NavLink>
        </div>
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
