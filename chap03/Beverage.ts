export abstract class Beverage {
  constructor(private description: string = "不明な飲み物") {}

  public getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}