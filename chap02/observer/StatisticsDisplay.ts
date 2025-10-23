import { DisplayElement } from "../display/DisplayElement";
import { WeatherData } from "../subject/WeatherData";
import { Observer } from "./Observer";

export class StatisticsDisplay implements Observer, DisplayElement {
  private maxTemp = 0;
  private minTemp = 200;
  private tempSum = 0;
  private numReadings = 0;

  constructor(weatherData: WeatherData) {
    weatherData.registerObserver(this);
  }

  public update(temperature: number, humidity: number, pressure: number): void {
    this.tempSum += temperature;
    this.numReadings++;

    if(temperature > this.maxTemp) {
      this.maxTemp = temperature;
    }

    if (temperature < this.minTemp) {
      this.minTemp = temperature;
    }

    this.display();
  }

  public display(): void {
    console.log(`AVG/MAX/Min temperature = ${this.avgTemperature()}/${this.maxTemp}/${this.minTemp}`)
  }

  private avgTemperature(): number {
    return this.tempSum / this.numReadings;
  }
}