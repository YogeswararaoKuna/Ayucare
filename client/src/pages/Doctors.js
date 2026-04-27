import { useEffect, useState } from "react";

function Doctors() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      });
    });
  }, []);

  return (
    <div>
      <h2>Nearby Doctors</h2>
      {location ? (
        <p>Latitude: {location.lat}, Longitude: {location.lng}</p>
      ) : (
        <p>Getting location...</p>
      )}
    </div>
  );
}

export default Doctors;