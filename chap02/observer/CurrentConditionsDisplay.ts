import { DisplayElement } from "../display/DisplayElement";
import { WeatherData } from "../subject/WeatherData";
import { Observer } from "./Observer";

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature?: number;
  private humidity?: number;

  constructor(private weatherData: WeatherData) {
    weatherData.registerObserver(this);
  }

  public update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  public display(): void {
    console.log(`現在の基本状況：温度${this.temperature}度（華氏） 湿度${this.humidity}%`)
  }
}