
import { useEffect } from 'react';

export default function Contact(): JSX.Element {
  useEffect(() => {
    // Initialize Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat: 52.3674, lng: 5.2182 }, // Coordinates for Almere
        zoom: 15,
      });

      new google.maps.Marker({
        position: { lat: 52.3674, lng: 5.2182 }, // Coordinates for the specific address
        map,
        title: 'PICCA'
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-white pt-20">
      <div className="max-w-[1280px] mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#FFF7EA] rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="font-semibold w-24">Address:</span>
                <span>Markerkant 12 12, 06 01<br/>1314AK ALMERE</span>
              </p>
              <p className="flex items-center">
                <span className="font-semibold w-24">Email:</span>
                <a href="mailto:piccalmere@gmail.com" className="text-blue-600 hover:text-blue-800">
                  piccalmere@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="font-semibold w-24">Phone:</span>
                <a href="tel:0622412770" className="text-blue-600 hover:text-blue-800">
                  0622412770
                </a>
              </p>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden">
            <div id="map" className="w-full h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
