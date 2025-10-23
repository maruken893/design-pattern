import { Observer } from "../observer/Observer";
import { Subject } from "./Subject";

export class WeatherData implements Subject {
  private observers: Array<Observer> = [];
  private temperature?: number;
  private humidity?: number;
  private pressure?: number;

  constructor() {}

  public registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  public removeObserver(o: Observer): void {
    this.observers = this.observers.filter((observer) => o !== observer)
  }

  public getTemperature(): number | undefined {
    return this.temperature;
  }

  public getHumidity(): number | undefined {
    return this.humidity;
  }

  public getPressure(): number | undefined {
    return this.pressure;
  }

  public notifyObservers() {
    if (this.temperature !== undefined &&
      this.humidity !== undefined &&
      this.pressure !== undefined
    ) {
      for (const observer of this.observers) {
        // Observerにpushする場合
        // observer.update(this.temperature, this.humidity, this.pressure);

        // Observerからpullされる場合
        observer.update();
      }
    }
  }

  private measurementsChanged(): void {
    // observerに変更を通知 = observerが行うメソッドを一斉に実行
    this.notifyObservers();
  }

  public setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}