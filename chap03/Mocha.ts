import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./CondimentDecorator";

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}、モカ`;
  }

  public cost(): number {
    return this.beverage.cost() + 0.2;
  }
}