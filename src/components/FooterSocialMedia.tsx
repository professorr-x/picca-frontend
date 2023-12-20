import {
  FaFacebook,
  FaTiktok
} from "react-icons/fa";

/* create social media buttons in footer */
export function FooterSocialMedia(): JSX.Element {
  return (
    <div className="flex sm:w-[300px] pt-4 text-2xl">
      <FaFacebook className="m-2 hover:text-white cursor-pointer"/>
      <FaTiktok className="m-2 hover:text-white cursor-pointer"/>
    </div>
  );
}
