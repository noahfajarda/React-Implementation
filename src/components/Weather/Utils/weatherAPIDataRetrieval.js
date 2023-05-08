import axios from "axios";

// 2 API calls
const getGeoLocation = (cityName, stateCode, apiKey, limit = 5) =>
  axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode}&limit=${limit}&appid=${apiKey}`
  );
const getWeather = (lat, lon, apiKey) =>
  axios.get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=imperial&appid=${apiKey}`
  );

// function to retrieve weather data
export const retrieveWeatherData = async (city, state, dataToDisplay, setDataToDisplay, apiKey) => {
  // retrieve coordinate data from API (limit 5)
  const geoResponse = await getGeoLocation(
    // ex: "Newark", "California"
    city.toUpperCase(),
    state.toUpperCase(),
    apiKey
  );

  // filter for state
  let filtered = geoResponse.data.filter((item) => item.state == state);
  // if state doesn't match, get the first entry
  if (filtered.length == 0) {
    filtered = [geoResponse.data[0]];
  }


  // get weather for coordinates
  let weatherResponse = await getWeather(
    filtered[0].lat,
    filtered[0].lon,
    apiKey
  );

  return weatherResponse.data;
};