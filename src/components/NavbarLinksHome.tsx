
import { Link } from "react-router-dom";

export function NavbarLinksHome(): JSX.Element {
  return (
    <Link to="/" className="hover:text-indigo-600">
      Home
    </Link>
  );
}
