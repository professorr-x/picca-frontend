
import prayerImage from "../assets/taliwang-mengaji-f7WXRX4FHNo-unsplash.jpg";

const prayerData = [
  { name: "Fajr", prayer: "05:15" },
  { name: "Zohar", prayer: "14:00" },
  { name: "Asar", prayer: "19:00" },
  { name: "Maghrib", prayer: "09:33" },
  { name: "Isha", prayer: "22:50" },
  { name: "Jumah", prayer: "14:00" },
];

export default function PrayerTiming(): JSX.Element {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Prayer Timing</h2>
          <div className="bg-[#FFF7EA] rounded-lg p-6">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <span className="font-bold">Name Of Salat</span>
              <span className="font-bold text-right">Prayer Time</span>
            </div>
            {prayerData.map((prayer) => (
              <div key={prayer.name} className="grid grid-cols-3 gap-4 py-2 border-b border-dotted border-gray-300">
                <span className="text-gray-600">{prayer.name}</span>
                <span className="text-gray-600 text-right">{prayer.prayer}</span>
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
