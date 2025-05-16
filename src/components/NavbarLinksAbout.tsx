
import { Link } from "react-router-dom";

export function NavbarLinksAbout(): JSX.Element {
  return (
    <Link to="/beleidsplan" className="hover:text-indigo-600">
      About
    </Link>
  );
}
