import "./Forecast.css";

export default function Forecast({ dataToDisplay }) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // FILTERED WEATHER DATA FOR NEXT 5 DAYS
  // day
  // date
  // icon
  // high fahrenheit
  // low fahrenheit

  return (
    <div className="flex flex-wrap justify-center">
      {dataToDisplay.daily.map((day, index) => (
        <div key={index} className={`p-10 forecast forecast-${index}`}>
          <div>{weekday[new Date(day.dt * 1000).getDay()]}</div>
          <div>{new Date(day.dt * 1000).toLocaleDateString()}</div>
          <div className="flex justify-center">
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={weekday[new Date(day.dt * 1000).getDay()] + `-icon`}
            />
          </div>
          <div>{day.temp.day} °F</div>
          <div>Low: {day.temp.min} °F</div>
          <div>High: {day.temp.max} °F</div>
        </div>
      ))}
    </div>
  );
}
