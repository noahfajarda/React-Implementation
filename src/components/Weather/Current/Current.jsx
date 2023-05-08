export default function Current({ dataToDisplay }) {
  // CURRENT
  // fahrenheit
  // icon
  // humidity
  // wind speed
  // day
  // date
  // time
  // "clear with periodic clouds"
  return (
    <section>
      <h1>Data:</h1>
      <h2 className="text-xl">City: {dataToDisplay.city}</h2>
      <h2 className="text-xl">Current Weather</h2>
      <div className="flex justify-center">
        <img
          src={`https://openweathermap.org/img/wn/${dataToDisplay.icon}.png`}
          alt="icon"
        />
      </div>
      <p>Date: {dataToDisplay.date}</p>
      <p>Time: {dataToDisplay.time}</p>
      <p>Fahrenheight: {dataToDisplay.fahrenheit} °F</p>
      <p>Humidity: {dataToDisplay.humidity}%</p>
      <p>Wind Speed: {dataToDisplay.wind_speed} mph</p>
      <p>Description: {dataToDisplay.description}</p>
    </section>
  );
}
