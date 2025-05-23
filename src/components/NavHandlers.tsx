import { Link } from "react-scroll";

/**
 * handlers and links for buttons in navbar
 */
export function NavHandlers({
  nav,
  handleClose,
}: {
  nav: boolean;
  handleClose: () => void;
}): JSX.Element {
  return (
    <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
      <li className="border-b-2 border-zinc-300 w-full">
        <Link onClick={handleClose} to="home" smooth duration={500}>
          Home
        </Link>
      </li>
      <li className="border-b-2 border-zinc-300 w-full">
        <Link onClick={handleClose} to="/beleidsplan">
          About
        </Link>
      </li>
      <li className="border-b-2 border-zinc-300 w-full">
        <Link
          onClick={handleClose}
          to="anbi"
          smooth
          offset={-500}
          duration={500}
        >
          ANBI
        </Link>
      </li>
      {/* <li className="border-b-2 border-zinc-300 w-full">
        <Link
          onClick={handleClose}
          to="support"
          smooth
          offset={-50}
          duration={500}
        >
          Support
        </Link>
      </li>
      <li className="border-b-2 border-zinc-300 w-full">
        <Link
          onClick={handleClose}
          to="platforms"
          smooth
          offset={-100}
          duration={500}
        >
          Platforms
        </Link>
      </li>
      <li className="border-b-2 border-zinc-300 w-full">
        <Link
          onClick={handleClose}
          to="pricing"
          smooth
          offset={-50}
          duration={500}
        >
          Pricing
        </Link>
      </li> */}
    </ul>
  );
}
