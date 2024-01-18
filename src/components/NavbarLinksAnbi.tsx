import { Link } from "react-scroll";

export function NavbarLinksAnbi(): JSX.Element {
  return (
    <Link to="anbi" smooth offset={-200} duration={500}>
      ANBI
    </Link>
  )
}
