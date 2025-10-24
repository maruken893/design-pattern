import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./CondimentDecorator";

export class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}、ホイップ`;
  }

  public cost(): number {
    return this.beverage.cost() + 0.5;
  }
}