import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./CondimentDecorator";

export class SoyMilk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}、豆乳`;
  }

  public cost(): number {
    return this.beverage.cost() + 0.15;
  }
}