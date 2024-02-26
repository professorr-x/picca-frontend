// import uuid from "react-uuid";
// import { FooterEmail } from "./FooterEmail";
import { FooterSocialMedia } from "./FooterSocialMedia";

/* footer component */
export default function Footer(): JSX.Element {
  // const data = [
  //   {
  //     heading: "",
  //     l1: "Home",
  //     l2: "About",
  //     l3: "Events",
  //   },
  // ] as const;

  // const mappedData = data.map((e) => (
  //   <div key={uuid()}>
  //     <h6 className="font-bold uppercase p-4 sm:pt-2">{e.heading}</h6>
  //     <ul className="flex">
  //       <li className="py-1">{e.l1}</li>
  //       <li className="py-1">{e.l2}</li>
  //       <li className="py-1">{e.l3}</li>
  //     </ul>
  //   </div>
  // ));

  return (
    <div className="w-full mt-24 bg-[rgb(10,17,10)] text-gray-300 py-y px-2">
      {/* <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {mappedData}
        {FooterEmail()}
      </div> */}
      <div className="text-gray-300 px-2 py-4 leading-8">
        <h1>Naam: Stichting Pakistaanse Islamitisch Cultureel Centrum Almere </h1><br></br>

        <p>Adres: Markerkant 12 12, 06 01 </p>
        <p>Woonplaats: 1314AK ALMERE </p><br></br>

        <p>RSIN: 865712013 </p>
        <p>K.v.K: 91612683 </p><br></br>

        <p>Contactpersoon: S.Ahmed </p>
        <p>Emailadres: piccalmere@gmail.com </p><br></br>

        <p>Mobiel: 0622412770 </p><br></br>
        {/* <h1>Pakistaanse Islamitisch Cultureel Centrum Almere</h1>
        <p>Markerkant 120601, 1314 AK Almere</p>
        <p>T: 06 55955402</p> */}
      </div>


      <div className="flex flex-col px-2 py-4 justify-between sm:flex-row text-center text-gray-500">

        <p className="py-4">
          © 2023 All rights reserved
        </p>
        <FooterSocialMedia />
      </div>
    </div>
  );
}
