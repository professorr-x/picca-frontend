import { Menu, X } from "heroicons-react";
import { useState } from "react";
// import { Login } from "./Login";
import { NavbarLinks } from "./NavbarLinks";
import { NavHandlers } from "./NavHandlers";

/* navbar component */
function Navbar(): JSX.Element {
  const [nav, setNav] = useState(false);

  /*event handler */
  const handleClick = () => setNav(!nav);
  /*event handler */
  const handleClose = () => setNav(!nav);

  const hamburgerMenu = !nav ? <Menu /> : <X />;
  const hamburger = <div className="w-5">{hamburgerMenu}</div>;

  return (
    <div className="w-screen sm:h-20 z-10 bg-zinc-200 fixed drop-shadow-lg contents">
      <div className="flex justify-between items-center px-2 w-full h-full">
        <h1 className="text-3xl font-bold sm:text-4xl">P I C C A</h1>
        <NavbarLinks />
        {/* <Login /> */}
        <div className="md:hidden mr-4" onClick={handleClick}>
          {hamburger}
        </div>
      </div>

      <NavHandlers nav={nav} handleClose={handleClose} />
    </div>
  );
}

export default Navbar;
