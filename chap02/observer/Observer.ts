export interface Observer {
  // Observerにpushする場合
  // update(temperature: number, humidity: number, pressure: number): void;

  // Observerからpullされる場合
  update(): void;
}