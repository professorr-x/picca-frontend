
import mosqueImg from "../assets/taliwang-mengaji-f7WXRX4FHNo-unsplash.jpg";

export default function Beleidsplan(): JSX.Element {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={mosqueImg}
          alt="Mosque Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white tracking-wider">Beleidsplan</h1>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        <section className="transform hover:scale-105 transition-transform duration-300 bg-white rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900 border-b-2 border-indigo-500 pb-2 inline-block">Doelstelling</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Het hoofddoel blijft het bevorderen van religieuze, culturele, sociale en maatschappelijke belangen van moslims en het verstrekken van informatie over de islam en Nederlandse samenleving.
          </p>
        </section>

        <section className="transform hover:scale-105 transition-transform duration-300 bg-white rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900 border-b-2 border-indigo-500 pb-2 inline-block">Werving Fondsen</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            De giften en donaties van de Stichting komen van onze achterban, die behalve in Almere over heel Nederland gevestigd zijn. Deze geven vrijwillig een maandelijkse bijdrage, periodieke donaties of een eenmalige donaties.
          </p>
        </section>

        <section className="transform hover:scale-105 transition-transform duration-300 bg-white rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900 border-b-2 border-indigo-500 pb-2 inline-block">Beheer Fondsen</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            De fondsen worden beheerd door de penningmeester van onze organisatie. De gelden komen in de kas en/of via de bankrekening van de moskee. De administratie van alle inkomsten en uitgaven wordt vastgelegd.
          </p>
        </section>

        <section className="transform hover:scale-105 transition-transform duration-300 bg-white rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900 border-b-2 border-indigo-500 pb-2 inline-block">Besteding Fondsen</h2>
          <ul className="text-lg text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4 pl-6 mt-6">
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-indigo-500 rounded-full"></span>
              <span>Vaste lasten voor de gebedsruimte</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-indigo-500 rounded-full"></span>
              <span>Beheerskosten voor het pand</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-indigo-500 rounded-full"></span>
              <span>Aanschaf onderwijsmaterialen</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-indigo-500 rounded-full"></span>
              <span>Onkosten activiteiten voor vrouwen</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-indigo-500 rounded-full"></span>
              <span>Onkosten multiculturele activiteiten</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-indigo-500 rounded-full"></span>
              <span>Aanschaf promotiemateriaal</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-indigo-500 rounded-full"></span>
              <span>Verzekeringen</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-indigo-500 rounded-full"></span>
              <span>Onkostenvergoedingen</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
