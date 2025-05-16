/* text seen on top of the about section */
export function AboutText(): JSX.Element {
  return (
    <div className="text-center">
      <h2 className="sm:text-5xl text-2xl font-bold mx-1">
        Welkom bij de Pakistaanse Islamitisch Cultureel Centrum Almere
      </h2>
      <p className="sm:text-3xl py-6 text-gray-500 px-5 sm:px-4 md:px-3 lg:px-2 xl:px-1">
        Geloof, Cultuur, en Gemeenschap Omarmen <br></br>

        een bruisende ontmoetingsplek die het geloof en de rijke cultuur van Pakistan viert. In het hart van onze gemeenschap bieden wij een plek voor spirituele groei door gebeden en educatieve programma's, en duiken we in de Pakistaanse tradities met kleurrijke culturele evenementen. Wij zijn een centrum waar iedereen, op zoek naar spirituele begeleiding of culturele verbinding, welkom is. Verrijk jezelf in een omgeving die diversiteit omarmt, erfgoed viert en gemeenschapszin bouwt. Bezoek ons om deel te worden van deze unieke ervaring.
      </p>
      {/* <h2 className="sm:text-5xl text-2xl font-bold mx-1 mt-52">
        Islam
      </h2>
      <p className="sm:text-3xl py-6 text-gray-500 px-5 sm:px-4 md:px-3 lg:px-2 xl:px-1">
        Islam betekent: Onderwerping (overgave) en aanbieden van Vrede. Islam is de laatste religie en is een alomvattende levenswijze voor de gehele mensheid. Het is ons gebracht door de heilige Profeet Mohammed (salla Allahoe aleihi wa sallam), die de zegel is voor het profeetschap. Na hem zal geen profeet meer komen. Islam omvat vijf zuilen die verplicht zijn voor elke moslim(a).
      </p> */}
      <h1 className="sm:text-5xl text-2xl font-bold mx-1 mt-52">
        Doelstellingen
      </h1>
      <div className="w-full max-w-4xl mx-auto my-8">
        <img 
          src={require("../assets/levi-meir-clancy-Y2oE2uNLSrs-unsplash.jpg")} 
          alt="Community Prayer During Service" 
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>

      <ul className="sm:text-3xl py-6 text-gray-500 px-5 sm:px-4 md:px-3 lg:px-2 xl:px-1">
        <li>
          Het geven van onderricht in de Islam.
        </li>
        <li>
          Het geven van voorlichting over de Islam aan andere organisaties en natuurlijke personen.
        </li>
        <li>
          Het verrichten van sociaal, cultureel en maatschappelijk werk.
        </li>
        <li>
          Het bevorderen van de participatie onder moslims in Nederland.
        </li>
        <li>
          Het adviseren van beleid met regeringen, overheden en autoriteiten inzake moslims.
        </li>
        <li>
          Het ondersteunen van groepen en organisaties van moslims.
        </li>
        <li>
          Het bevorderen van de studie in de Islam;
        </li>
      </ul>
      <br></br>
      <br></br>

      <hr className="h-px my-8 bg-gray-600 border-0 dark:bg-gray-700"></hr>


    </div>
  );
}
