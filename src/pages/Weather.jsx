import { useState } from "react";

// components
import Navbar from "../components/Navbar/Navbar";
import Forecast from "../components/Weather/Forecast/Forecast";
import Current from "../components/Weather/Current/Current";

// weather API data retrieval
import { retrieveWeatherData } from "../components/Weather/Utils/weatherAPIDataRetrieval.js";

const displayWeatherData = (weatherData, dataToDisplay, setDataToDisplay) => {
  console.log(`This is the DATA:`, weatherData);

  // account for single-digit minutes
  let minutes = new Date(weatherData.current.dt * 1000).getMinutes();
  if (minutes.toString().length == 1) {
    minutes = "0" + minutes;
  }

  // account for AM and PM
  let AMPM = "AM";
  let hours = new Date(weatherData.current.dt * 1000).getHours();
  if (hours > 12) {
    hours = hours - 12;
    AMPM = "PM";
  } else if (hours == 12) {
    AMPM = "PM";
  }

  setDataToDisplay({
    ...dataToDisplay,
    fahrenheit: weatherData.current.temp,
    icon: weatherData.current.weather[0].icon,
    humidity: weatherData.current.humidity,
    wind_speed: weatherData.current.wind_speed,
    description: `${weatherData.current.weather[0].main} (${weatherData.current.weather[0].description})`,
    date: new Date(weatherData.current.dt * 1000).toLocaleDateString(),
    time: `${hours}:${minutes} ${AMPM}`,
    daily: weatherData.daily,
  });
};

export default function Weather() {
  const [city, setCity] = useState("Newark");
  const [state, setState] = useState("California");
  const [dataToDisplay, setDataToDisplay] = useState({
    fahrenheit: "",
    icon: "",
    humidity: "",
    wind_speed: "",
    description: "",
    date: "",
    time: "",
    daily: "",
    city: "",
  });

  const handleCitySubmit = async (e) => {
    e.preventDefault();

    // retrieve weather data
    const data = await retrieveWeatherData(
      // "Newark", "California"
      city.trim(),
      state.trim(),
      dataToDisplay,
      setDataToDisplay,
      "b80f4f4a76bd4c6a587f1efe91224ce5"
    );

    // display weather data
    displayWeatherData(data, dataToDisplay, setDataToDisplay);

    // reset state variables
    setCity("");
    setState("");
  };

  return (
    <div className="flex flex-col space-y-7">
      <Navbar />
      <div>
        <div className="pb-3">Enter a city & state:</div>
        <form
          onSubmit={handleCitySubmit}
          className="flex flex-col items-center content-between"
        >
          <label className="pb-3">
            City:{" "}
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          <label className="pb-3">
            State:{" "}
            <input
              type="text"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </label>
          <button type="submit" className="btn bg-orange-900">
            Submit
          </button>
        </form>
        {/* Display current weather */}
        <Current dataToDisplay={dataToDisplay} />
      </div>

      {dataToDisplay.daily.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <div>Forecast</div>
          {/* Display 5-day forecast */}
          <Forecast dataToDisplay={dataToDisplay} />
        </div>
      )}
    </div>
  );
}
