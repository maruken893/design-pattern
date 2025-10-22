import { CurrentConditionsDisplay } from "./observer/CurrentConditionsDisplay";
import { StatisticsDisplay } from "./observer/StatisticsDisplay";
import { WeatherData } from "./subject/WeatherData";

// Subjectの生成
const weatherData = new WeatherData();

// Observerの生成。このとき所属するSubjectのグループはObserver側で指定する
new CurrentConditionsDisplay(weatherData);
new StatisticsDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29);