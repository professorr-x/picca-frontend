
import prayerImage from "../assets/taliwang-mengaji-f7WXRX4FHNo-unsplash.jpg";

const prayerData = [
  { name: "Fajr", azan: "03:30 am", prayer: "04:30 Am" },
  { name: "Zohar", azan: "01:00 pm", prayer: "01:15 Pm" },
  { name: "Asar", azan: "05:10 pm", prayer: "05:10 Pm" },
  { name: "Maghrib", azan: "06:50 pm", prayer: "07:00 Pm" },
  { name: "Isha", azan: "08:25 pm", prayer: "08:45 Pm" },
  { name: "Jumah", azan: "12:30 pm", prayer: "01:30 Pm" },
];

export default function PrayerTiming(): JSX.Element {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Prayer Timing</h2>
          <div className="bg-[#FFF7EA] rounded-lg p-6">
            <div className="flex justify-between mb-4">
              <span className="font-bold">Name Of Salat</span>
              <span className="font-bold">Azan Time</span>
              <span className="font-bold">Prayer Time</span>
            </div>
            {prayerData.map((prayer) => (
              <div key={prayer.name} className="flex justify-between py-2 border-b border-dotted border-gray-300">
                <span className="text-gray-600">{prayer.name}</span>
                <span className="text-gray-600">{prayer.azan}</span>
                <span className="text-gray-600">{prayer.prayer}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[500px]">
          <img className="w-full h-full object-cover rounded-lg" src={prayerImage} alt="Prayer" />
        </div>
      </div>
    </div>
  );
}
