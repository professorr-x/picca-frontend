
import mosqueImg from "../assets/taliwang-mengaji-f7WXRX4FHNo-unsplash.jpg";

export default function Beleidsplan(): JSX.Element {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={mosqueImg}
          alt="Mosque Interior"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Beleidsplan</h1>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Doelstelling</h2>
          <p className="text-lg text-gray-600">
            Het hoofddoel blijft het bevorderen van religieuze, culturele, sociale en maatschappelijke belangen van moslims en het verstrekken van informatie over de islam en Nederlandse samenleving.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Werving Fondsen</h2>
          <p className="text-lg text-gray-600">
            De giften en donaties van de Stichting komen van onze achterban, die behalve in Almere over heel Nederland gevestigd zijn. Deze geven vrijwillig een maandelijkse bijdrage, periodieke donaties of een eenmalige donaties.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Beheer Fondsen</h2>
          <p className="text-lg text-gray-600">
            De fondsen worden beheerd door de penningmeester van onze organisatie. De gelden komen in de kas en/of via de bankrekening van de moskee. De administratie van alle inkomsten en uitgaven wordt vastgelegd.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Besteding Fondsen</h2>
          <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2">
            <li>Vaste lasten voor de gebedsruimte</li>
            <li>Beheerskosten voor het pand zoals schoonmaak en onderhoud</li>
            <li>Aanschaf onderwijsmaterialen</li>
            <li>Onkosten activiteiten voor vrouwen</li>
            <li>Onkosten multiculturele activiteiten</li>
            <li>Aanschaf promotiemateriaal</li>
            <li>Verzekeringen</li>
            <li>Onkostenvergoedingen aan docenten en vrijwilligers indien nodig</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
