import { useState, useEffect } from "react";
import { Sun } from "lucide-react";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async (latitude, longitude) => {
      const apiKey = "f05c5126624595469053bcd933efaa1e";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError("Failed to fetch weather data");
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        () => {
          setError("Unable to retrieve location");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser");
    }
  }, []);

  return (
    <div className="mt-6 p-4 bg-blue-100 rounded-md shadow-md flex items-center gap-4">
      <Sun className="w-6 h-6 text-yellow-500" />
      <div>
        <h3 className="text-xl font-semibold">Current Weather</h3>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : weather ? (
          <p className="text-gray-600">{weather.weather[0].description}, {weather.main.temp}°C</p>
        ) : (
          <p className="text-gray-600">Fetching location & weather...</p>
        )}
      </div>
    </div>
  );
};

export default WeatherWidget;
