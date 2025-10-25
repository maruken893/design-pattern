import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./CondimentDecorator";

export class SteamMilk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}、スチームミルク`;
  }

  public cost(): number {
    return this.beverage.cost() + 0.1;
  }
}