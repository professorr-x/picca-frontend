
import mosqueImg from "../assets/mosque-window.jpg";

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
          <h2 className="text-3xl font-semibold text-gray-900 border-b-2 border-indigo-500 pb-2 inline-block">Doelstellingen</h2>
          <ul className="text-lg text-gray-700 space-y-3 list-disc pl-6">
            <li>Het geven van onderricht in de Islam.</li>
            <li>Het geven van voorlichting over de Islam aan andere organisaties en natuurlijke personen.</li>
            <li>Het verrichten van sociaal, cultureel en maatschappelijk werk.</li>
            <li>Het bevorderen van de participatie onder moslims in Nederland.</li>
            <li>Het adviseren van beleid met regeringen, overheden en autoriteiten inzake moslims.</li>
            <li>Het ondersteunen van groepen en organisaties van moslims.</li>
            <li>Het bevorderen van de studie in de Islam.</li>
          </ul>
        </section>

        <section className="transform hover:scale-105 transition-transform duration-300 bg-white rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900 border-b-2 border-indigo-500 pb-2 inline-block">De Stichting tracht haar doelen te bereiken</h2>
          <ul className="text-lg text-gray-700 space-y-3 list-disc pl-6">
            <li>Onder meer door het bieden van spirituele, culturele, maatschappelijke en religieuze activiteiten te organiseren en het oprichten en onderhouden van moskeeën</li>
            <li>Het verstrekken van informatie en voorlichting aan moslims over de Nederlandse samenleving</li>
            <li>Het verstrekken van informatie en voorlichting aan de Nederlandse samenleving over de Islam en moslims</li>
            <li>Het houden van bijeenkomsten met lezingen en discussies</li>
            <li>Het verrichten van activiteiten ter ondersteuning van allochtonen</li>
            <li>Het vieren van Pakistaanse nationale dagen</li>
            <li>De stichting heeft geen winstoogmerk</li>
          </ul>
        </section>

        <section className="transform hover:scale-105 transition-transform duration-300 bg-white rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900 border-b-2 border-indigo-500 pb-2 inline-block">Beloningsbeleid</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-medium text-gray-800 mb-3">Bestuursleden</h3>
              <p className="text-lg text-gray-700">Het bestuur bestaat uit 3 leden. De verschillende bestuursfuncties betekenen veel opoffering van de eigen vrije tijd. Ondanks dat is de motivatie en voldoening zeer hoog, omdat een ieder het als een verplichting vanuit het geloof ziet om bij te dragen aan het welzijn van de maatschappij. De bestuursleden zijn allemaal verantwoordelijk voor hun eigen werkzaamheden, maar werken samen om tot de gewenste eindresultaten te komen. Bestuursleden genieten voor hun bestuurswerkzaamheden geen beloning. De door bestuursleden gemaakte onkosten kunnen worden vergoed, waarbij voorafgaande schriftelijke toestemming van alle overige bestuursleden vereist is.</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-gray-800 mb-3">Schriftgeleerden en Imam</h3>
              <p className="text-lg text-gray-700">Imam en Schriftgeleerden genieten voor hun taken geen beloning, maar een onkostenvergoeding, welke door het bestuur is vastgesteld.</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-gray-800 mb-3">Vrijwilligers</h3>
              <p className="text-lg text-gray-700">Vrijwilligers kunnen voor hun activiteiten een vrijwilligers-vergoeding ontvangen die vastgelegd wordt in overleg met de vrijwilliger. Echter kiezen de vrijwilligers geen enkel vorm van vergoeding te ontvangen.</p>
            </div>
          </div>
        </section>

        <section className="transform hover:scale-105 transition-transform duration-300 bg-white rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900 border-b-2 border-indigo-500 pb-2 inline-block">Actueel verslag van de uitgeoefende activiteiten</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-medium text-gray-800 mb-3">Educatieve activiteiten</h3>
              <p className="text-lg text-gray-700">Godsdienstlessen en lezingen worden door gekwalificeerde docenten wekelijks gegeven over de eigen religie. Daarnaast wordt door de imam in de wekelijkse vrijdagstoespraken raakvlakken behandeld tussen de Islam en een actueel onderwerp. Door docenten worden aan leerlingen (mannen, vrouwen, jongens, meisjes en kinderen) les gegeven in het reciteren en uitleg van de Koran.</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-gray-800 mb-3">Sociaal-culturele activiteiten</h3>
              <p className="text-lg text-gray-700 mb-4">Het vieren van religieuze feestdagen o.a. Suikerfeest, offerfeest, geboorteviering van de profeet. Het vieren van Pakistaanse feestdagen Op het gebied van sport wordt er (zaal) Cricket georganiseerd en gespeeld en wordt ook voetbaltoernooi georganiseerd.</p>
              <h4 className="text-xl font-medium text-gray-800 mb-3">Gerealiseerde activiteiten in 2023:</h4>
              <ul className="text-lg text-gray-700 space-y-2 list-disc pl-6">
                <li>Wekelijks spirituele mannen bijeenkomst (elke donderdag en vrijdag avond)</li>
                <li>Maandelijks spirituele vrouwenbijeenkomst (eerste zondag van elke maand)</li>
                <li>"Meet&Greet" vrouwen bijeenkomst</li>
                <li>Eid Milaad un Nabi programma (Geboorteherdenking van de laatste profeet)</li>
                <li>Allama Iqbal, Qaid-e-Azam day</li>
                <li>Zondaglessen, koran + islamologielessen</li>
                <li>Essentiele Leergang Islam</li>
                <li>Basiskennis Islam</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
