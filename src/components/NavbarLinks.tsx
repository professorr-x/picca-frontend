import { NavbarLinksAbout } from "./NavbarLinksAbout";
import { NavbarLinksHome } from "./NavbarLinksHome";
// import { NavbarLinksSupport } from "./NavbarLinksSupport";

/**
 * create links found in leftside of navbar when expanded
 */
export function NavbarLinks(): JSX.Element {
  return (
    <div>
      <ul className="hidden md:flex mr-4">
        <li className="cursor-pointer hover:test-stone-100 hover:font-bold">{NavbarLinksHome()}</li>
        <li className="cursor-pointer hover:test-stone-100 hover:font-bold">{NavbarLinksAbout()}</li>
        {/* <li className="cursor-pointer hover:test-stone-100 hover:font-bold">{NavbarLinksSupport()}</li> */}
      </ul>
    </div>
  );
}
