import { Link } from "react-scroll";

/* button in navbar */
export function NavbarLinksNewMember(): JSX.Element {
  return (
    <Link to="about" smooth offset={-200} duration={500}>
      Become a Member
    </Link>
  );
}
