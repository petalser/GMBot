import TelegramBot from "node-telegram-bot-api";
import axios from "axios";
import { CronJob } from "cron";
import buildMessage from "./utils/buildMessage.js";
import dotenv from "dotenv";
dotenv.config();

const token = process.env.TG_TOKEN.trim();
const weatherToken = process.env.WEATHER_TOKEN;
const privatUrl =
  "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11";

const bot = new TelegramBot(token, { polling: true });

const job = new CronJob(
  "45 21 * * *",
  async () => {
    console.log("Job");
    if (result.id) {
      const data = await getCurrency();
      const message = buildMessage(data);
      bot.sendMessage(result.id, message);
    } else {
      console.log("No id");
    }
  },
  null,
  false,
  "Europe/Warsaw" // timeZone
);

const result = {};

const getCurrency = async () => {
  try {
    const privat = await axios.get(privatUrl);
    const privatCurrency = privat.data;
    const privatUsd = privatCurrency.find(
      (item) => item.ccy.toLowerCase() === "usd"
    );
    result.currency = {
      buy: parseFloat(privatUsd.buy),
      sell: parseFloat(privatUsd.sale),
    };
    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Lodz&exclude=minutely,alerts&units=metric&appid=${weatherToken}&lang=uk`
    );
    result.weather = weather.data;
  } catch (err) {
    console.error(err);
  }
  if (result.currency && result.weather) {
    return result;
  }
};

bot.on("polling_error", console.log);

bot.on("message", (msg) => {
  result.id = msg.chat.id;
  job.start();
});
console.log("Runs");
