import calcDate from "./calcDate.js";
import calcWind from "./calcWind.js";

const TO_MILIMETERS_MERCURY = 1.33322368;

const buildMessage = (data) => {
  const temp = data.weather.main.temp.toFixed(0);
  const main = data.weather.weather[0].main;
  const temp_min = data.weather.main.temp_min.toFixed(0);
  const temp_max = data.weather.main.temp_max.toFixed(0);
  const pressure = (data.weather.main.pressure * TO_MILIMETERS_MERCURY).toFixed(
    0
  );
  const wind_speed = data.weather.wind.speed.toFixed(0);
  const wind_dir = calcWind(data.weather.wind.deg);
  const sunrise = calcDate(data.weather.sys.sunrise);
  const sunset = calcDate(data.weather.sys.sunset);
  const buy = data.currency.buy;
  const sell = data.currency.sell.toFixed(2);
  const message = `
      *${temp}*, ${main}\n
      ${temp_min}/${temp_max}\n
      Pressure: ${pressure}
      Wind: ${wind_speed}, ${wind_dir}
      Day: ${sunrise}/${sunset}
      Currensy: ${buy}/${sell}`;
  return message;
};
export default buildMessage;
